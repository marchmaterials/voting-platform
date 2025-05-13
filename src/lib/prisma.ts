import { PrismaClient } from "@prisma/client";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import { PrismaNeon } from "@prisma/adapter-neon";

neonConfig.webSocketConstructor = ws;

const prismaClientSingleton = () => {
  const connectionString =
    process.env.NODE_ENV === "production"
      ? process.env.DATABASE_URL
      : process.env.DATABASE_URL_DEVELOPMENT;
  const adapter = new PrismaNeon({ connectionString });
  return new PrismaClient({ adapter, log: ["query", "info"] });
};
// const prismaClientSingleton = () => {
//   return new PrismaClient({ log: ["query", "info"] });
// };

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
