import { PrismaClient } from "../../prisma/generated/client";

export const prismaClientSingleton = () => {
  console.log("PRISMACLIENTSINGLETON", process.env.DATABASE_URL);
  console.log("ENV", process.env.NODE_ENV);
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
    log: ["query", "info"],
  });
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
