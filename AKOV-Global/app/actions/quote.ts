"use server"

import { z } from "zod";
import { Resend } from "resend";
import QuoteRequestEmail from "@/emails/QuoteRequestEmail";
import prisma from "@/lib/prisma"

// In production, RESEND_API_KEY must be provided
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

const quoteSchema = z.object({
  buyerName: z.string().min(2, "Name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Invalid email address"),
  whatsapp: z.string().min(5, "Phone number is required"),
  country: z.string().min(2, "Country is required"),
  product: z.string().min(2, "Product is required"),
  quantity: z.string().min(1, "Quantity is required"),
  destinationPort: z.string().min(2, "Destination port is required"),
  message: z.string().optional(),
});

export interface QuoteFormState {
  success: boolean;
  error: string;
  enquiryNumber: string;
  message: string;
}

export async function submitQuote(prevState: QuoteFormState, formData: FormData): Promise<QuoteFormState> {
  try {
    const rawData = Object.fromEntries(formData.entries());
    const validated = quoteSchema.parse(rawData);

    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const uniqueId = Math.random().toString(36).substring(2, 6).toUpperCase();
    const enquiryNumber = `AKOV-RFQ-${dateStr}-${uniqueId}`;

    let resolvedProductId: string | null = null;
    if (process.env.DATABASE_URL) {
      try {
        const dbProduct = await prisma.product.findFirst({
          where: {
            OR: [
              { slug: validated.product },
              { name: { equals: validated.product, mode: 'insensitive' } }
            ]
          }
        });
        if (dbProduct) {
          resolvedProductId = dbProduct.id;
        }
      } catch (e) {
        console.error("Non-critical error resolving productId", e);
      }
    }

    // 1. Save to Database (if connected) MUST succeed
    if (process.env.DATABASE_URL) {
       try {
         await prisma.enquiry.create({
           data: {
             enquiryNumber,
             buyerName: validated.buyerName,
             companyName: validated.companyName,
             email: validated.email,
             whatsapp: validated.whatsapp,
             country: validated.country,
             quantity: validated.quantity,
             destinationPort: validated.destinationPort,
             message: validated.message || "",
             status: "NEW",
             productId: resolvedProductId
           }
         });
       } catch (dbError) {
         console.error("Failed to save enquiry to DB:", dbError);
         return { success: false, error: "Unable to save your request at this time due to a database error. Please try again later.", enquiryNumber: "", message: "" };
       }
    } else {
       return { success: false, error: "Database configuration missing. Quotations cannot be submitted.", enquiryNumber: "", message: "" };
    }

    // 2. Dispatch Email (Only executed if DB save succeeds)
    const targetEmail = process.env.AKOV_NOTIFICATION_EMAIL || "akovglobal@gmail.com";
    if (process.env.RESEND_API_KEY && targetEmail) {
      try {
        await resend.emails.send({
          from: 'AKOV Global <rfq@akovglobal.com>',
          to: [targetEmail],
          subject: `New B2B Enquiry: ${validated.product} - ${enquiryNumber}`,
          react: QuoteRequestEmail({ ...validated, enquiryNumber }),
        });
      } catch (emailError) {
        console.error("Failed to dispatch RFQ notification email, but enquiry was saved.", emailError);
      }
    } else if (process.env.NODE_ENV === "production") {
      console.warn("PRODUCTION WARNING: RESEND_API_KEY or AKOV_NOTIFICATION_EMAIL is missing. Email dispatch skipped.");
    }

    return { success: true, enquiryNumber, message: "Your quotation request has been submitted successfully.", error: "" };
  } catch (error: any) {
    let errorMessage = "An unexpected error occurred. Please try again.";
    if (error?.errors && Array.isArray(error.errors)) {
       errorMessage = error.errors[0]?.message || errorMessage;
    }
    return { success: false, error: errorMessage, enquiryNumber: "", message: "" };
  }
}
