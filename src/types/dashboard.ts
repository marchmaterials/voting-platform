import { Project, Image as PrismaImage } from "@prisma/client";
import { ImageLoaderProps } from "next/image";

export type ProjectWithImages = Project & {
  images: Array<PrismaImage>;
};

export interface extendedImageLoaderProps extends ImageLoaderProps {
  height?: number;
}
