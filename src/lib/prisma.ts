import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  const connectionString =
    process.env.NODE_ENV === "production"
      ? process.env.DATABASE_URL
      : process.env.DATABASE_URL_DEVELOPMENT;
  return new PrismaClient({
    datasources: {
      db: {
        url: connectionString,
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
