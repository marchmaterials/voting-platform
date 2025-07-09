import prisma from "@/lib/prisma";
import { Images, ProjectMaterials } from "@/types/dashboard";
import { Project } from "@prisma/client";

export const getAllProjects = async (): Promise<
  Array<Project & Images & ProjectMaterials> | Error
> => {
  try {
    return await prisma.project.findMany({
      include: {
        images: true,
        projectMaterial: { include: { material: true } },
      },
    });
  } catch (err) {
    console.error(err);
    return err as Error;
  }
};
