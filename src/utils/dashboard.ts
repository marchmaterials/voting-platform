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
        location: true,
        stakeholders: true,
      },
    });
  } catch (err) {
    console.error(err);
    return err as Error;
  }
};


export const searchProjects = async ({
  searchTerm,
}: FilterOptions): Promise<Array<FullyEnrichedProject> | Error> => {

  if (!searchTerm) return new Error("no search criteria provided");
  try {
    const sanitizedSearchTerm = searchTerm.toLowerCase().trim()
    console.log(`sanitizedSearchTerm=${sanitizedSearchTerm}`)
    let filter;
    switch (sanitizedSearchTerm) {
      case "small":
        filter = { area: { lt: 100 } }
        break
      case "medium":
        filter = { area: { gte: 100, lt: 500 } }
        break
      case "large":
        filter = { area: { gte: 500 } }
        break
      default:
        filter = {
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
                  companyName: {
                    contains: searchTerm,
                    mode: "insensitive",
                  },
                },
              },
            },
          ],
        }
    }
    console.log(filter)
    return await prisma.project.findMany({
      where: filter,
      include: {
        images: true,
        projectMaterial: { include: { material: true } },
        stakeholders: true,
        location: true,
      },
    });
  } catch (err) {
    console.error(err);
    return err as Error;
  }
};
