"use server"

import prisma from "@/lib/prisma"

export async function getPublicProducts() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured.");
  }

  try {
    const dbProducts = await prisma.product.findMany({
      where: { isActive: true },
      include: { images: true, category: true },
      orderBy: { createdAt: 'desc' }
    });

    return dbProducts.map((p: any) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      categorySlug: p.category?.slug || '',
      description: p.description,
      origin: p.origin,
      grade: p.grade,
      moq: p.moq,
      packingOptions: p.packingOptions,
      shelfLife: p.shelfLife,
      hsCode: p.hsCode,
      primaryImage: p.images?.find((img: any) => img.isPrimary)?.url || p.images?.[0]?.url || "/products/turmeric.jpg",
      isFeatured: p.isFeatured
    }));
  } catch (error) {
    console.error("Failed to fetch public products", error);
    throw new Error("Failed to load products.");
  }
}

export async function getPublicCategories() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured.");
  }

  try {
    const dbCategories = await prisma.category.findMany({
      orderBy: { name: 'asc' }
    });

    return dbCategories.map((c: any) => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      icon: c.icon || 'wheat'
    }));
  } catch (error) {
    console.error("Failed to fetch public categories", error);
    throw new Error("Failed to load categories.");
  }
}

export async function getPublicProductBySlug(slug: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured.");
  }

  try {
    const dbProduct = await prisma.product.findUnique({
      where: { slug },
      include: { images: true, category: true }
    });

    if (!dbProduct) return null;
    if (!dbProduct.isActive) return null;

    return {
      ...dbProduct,
      primaryImage: dbProduct.images?.find((img: any) => img.isPrimary)?.url || dbProduct.images?.[0]?.url || "/products/turmeric.jpg",
      curcumin: "Variable",
      moisture: "Variable"
    };
  } catch (error) {
    console.error("Failed to fetch public product by slug", error);
    throw new Error("Failed to load product.");
  }
}

import { z } from "zod";

const supplierSchema = z.object({
  companyName: z.string().min(2, "Company Name is required"),
  contactName: z.string().min(2, "Contact Name is required"),
  email: z.string().email("Invalid email address"),
  whatsapp: z.string().min(5, "WhatsApp / Phone is required"),
  productOffered: z.string().min(2, "Primary Product is required"),
  monthlyCapacity: z.string().min(1, "Monthly Capacity is required"),
  location: z.string().min(2, "Location is required"),
});

export interface SupplierFormState {
  success: boolean;
  error: string;
  message: string;
}

export async function submitSupplierEnquiry(prevState: SupplierFormState, formData: FormData): Promise<SupplierFormState> {
  try {
    const rawData = Object.fromEntries(formData.entries());
    const validated = supplierSchema.parse(rawData);

    if (process.env.DATABASE_URL) {
       try {
         await prisma.supplierEnquiry.create({
           data: {
             companyName: validated.companyName,
             contactName: validated.contactName,
             email: validated.email,
             whatsapp: validated.whatsapp,
             productOffered: validated.productOffered,
             monthlyCapacity: validated.monthlyCapacity,
             location: validated.location
           }
         });
       } catch (dbError) {
         console.error("Failed to save supplier enquiry to DB:", dbError);
         return { success: false, error: "Unable to submit application due to database error. Please try again later.", message: "" };
       }
    } else {
       return { success: false, error: "Database configuration missing. Applications cannot be submitted.", message: "" };
    }

    return { success: true, message: "Your supplier application has been received successfully.", error: "" };
  } catch (error: any) {
    let errorMessage = "An unexpected error occurred. Please try again.";
    if (error?.errors && Array.isArray(error.errors)) {
       errorMessage = error.errors[0]?.message || errorMessage;
    }
    return { success: false, error: errorMessage, message: "" };
  }
}
