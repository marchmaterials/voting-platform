"use server";

import prisma from "@/lib/prisma";
import { FullyEnrichedProject } from "@/types/dashboard";
import slugify from "slugify";

export const getAllProjects = async (): Promise<
  Array<FullyEnrichedProject> | Error
> => {
  try {
    return prisma.project.findMany({
      include: {
        images: true,
        projectMaterial: { include: { material: { include: { supplier: true } } }, orderBy: { percentage: "desc" } },
        projectStakeholders: { include: { stakeholder: true }, orderBy: { position: "asc" } },
      },
      orderBy: [{
        votes: "desc"
      },
      {
        title: "asc"
      }],
    }).then(projects => projects.map(p => ({ titleSlug: slugify(p.title), ...p })));
  } catch (err) {
    console.error(err);
    return err as Error;
  }
};


