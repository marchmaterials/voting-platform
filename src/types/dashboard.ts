import { Image as PrismaImage, ProjectMaterial } from "@prisma/client";
import { ImageLoaderProps } from "next/image";

export type Images = {
  images: Array<PrismaImage>;
};

export interface extendedImageLoaderProps extends ImageLoaderProps {
  height?: number;
}

export type ProjectMaterials = { projectMaterial: Array<ProjectMaterial> };
