import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { categories, products } from "../lib/mockData";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined.");
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database with AKOV Global product data...");

  // 1. Create Categories
  const dbCategories = [];

  for (const cat of categories) {
    const createdCat = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: {
        name: cat.name,
        slug: cat.slug,
        icon: cat.icon,
      },
    });

    dbCategories.push(createdCat);
  }

  console.log("Categories seeded.");

  // 2. Create Products
  for (const prod of products) {
    const category = dbCategories.find(
      (c) => c.slug === prod.categorySlug
    );

    if (!category) {
      console.warn(`Skipping ${prod.name}: category not found.`);
      continue;
    }

    await prisma.product.upsert({
      where: { slug: prod.slug },
      update: {},
      create: {
        name: prod.name,
        slug: prod.slug,
        description: prod.description,
        origin: prod.origin,
        hsCode: prod.hsCode,
        moq: prod.moq,
        packingOptions: prod.packingOptions,
        shelfLife: prod.shelfLife,
        isFeatured: prod.isFeatured,
        categoryId: category.id,
        images: {
          create: {
            url: prod.primaryImage,
            isPrimary: true,
            altText: prod.name,
          },
        },
      },
    });
  }

  console.log("Products seeded successfully.");
}

main()
  .catch(async (error) => {
    console.error("❌ Seed failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
