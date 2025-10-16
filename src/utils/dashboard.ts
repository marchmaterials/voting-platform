"use server";

import prisma from "@/lib/prisma";
import { FullyEnrichedProject } from "@/types/dashboard";
import { ErrorCode, Result } from "@/types/result";
import slugify from "slugify";


type Success = {
  type: "success",
  ok: true,
  projects: Array<FullyEnrichedProject>
}


export const getAllProjects = async (limit?: number): Promise<Result<Success>> => {
  try {
    const projects = await prisma.project.findMany({
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
      },
      ],
    }).then(projects => projects.map(p => ({ titleSlug: slugify(p.title), ...p })));
    return {
      ok: true,
      type: "success",
      projects
    }
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      type: "error",
      code: ErrorCode.DbError,
      message: "failed to get projects from db"
    }
  }
};


