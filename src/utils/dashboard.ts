"use server";

import prisma from "@/lib/prisma";
import { FilterOptions, FullyEnrichedProject } from "@/types/dashboard";

export const getAllProjects = async (): Promise<
  Array<FullyEnrichedProject> | Error
> => {
  try {
    return prisma.project.findMany({
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

export const searchProjects = async ({ searchTerm }: FilterOptions) => {
  console.log("SEARCHING PROJECTS !!!!", searchTerm);
  if (!searchTerm) return;
  try {
    return await prisma.project.findMany({
      where: {
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            stakeholders: {
              some: {
                name: {
                  contains: searchTerm,
                  mode: "insensitive",
                },
              },
            },
          },
        ],
      },
      include: {
        images: true,
        projectMaterial: true,
        materials: true,
        stakeholders: true,
      },
    });
  } catch (err) {
    console.error(err);
    return err as Error;
  }
};
