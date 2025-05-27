import { Project, Image as PrismaImage } from "@prisma/client";

export type ProjectWithImages = Project & {
  images: Array<PrismaImage>;
};
