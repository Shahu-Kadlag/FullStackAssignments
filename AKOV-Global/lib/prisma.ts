import { PrismaClient } from '@/app/generated/prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

function createPrismaClient() {
  if (!process.env.DATABASE_URL) {
    // Return a Proxy that throws an error only when a database query is actually attempted.
    // This allows Next.js to build routes that import prisma without crashing at build-time.
    return new Proxy({} as PrismaClient, {
      get: (target, prop) => {
        throw new Error(`DATABASE_URL environment variable is not defined. Cannot access prisma.${String(prop)}`);
      }
    });
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);

  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production' && process.env.DATABASE_URL) {
  globalForPrisma.prisma = prisma;
}

export default prisma;
