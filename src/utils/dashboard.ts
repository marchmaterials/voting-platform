"use server";

import prisma from "@/lib/prisma";
import { FullyEnrichedProject } from "@/types/dashboard";
import { ErrorCode, Result } from "@/types/result";
import slugify from "slugify";

type Success = {
  type: "success";
  ok: true;
  projects: Array<FullyEnrichedProject>;
};

export const getAllProjects = async (
  limit?: number
): Promise<Result<Success>> => {
  try {
    const dateTo = new Date("2025-10-16T00:00:00Z");
    // 1) Count votes per project before cutoff
    const counts = await prisma.vote.groupBy({
      by: ["projectId"],
      where: { createdAt: { lt: dateTo } },
      _count: { _all: true },
    });

    const countsMap = new Map(counts.map((c) => [c.projectId, c._count._all]));
    // 2) Sort projectIds by count desc
    // const sortedIds = counts
    //   .sort((a, b) => b._count._all - a._count._all)
    //   .map((c) => c.projectId);
    const projects = await prisma.project
      .findMany({
        // where: { id: { in: sortedIds } },
        include: {
          images: true,
          projectMaterial: {
            include: { material: { include: { supplier: true } } },
            orderBy: { percentage: "desc" },
          },
          projectStakeholders: {
            include: { stakeholder: true },
            orderBy: { position: "asc" },
          },
        },
        orderBy: [
          {
            votes: "desc",
          },
          {
            title: "asc",
          },
        ],
        ...(limit ? { take: limit } : {}),
      })
      .then((projects) =>
        projects.map((p) => ({
          titleSlug: slugify(p.title),
          ...p,
          votes: countsMap.get(p.id) ?? p.votes,
        }))
      );
    return {
      ok: true,
      type: "success",
      projects,
    };
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      type: "error",
      code: ErrorCode.DbError,
      message: "failed to get projects from db",
    };
  }
};
