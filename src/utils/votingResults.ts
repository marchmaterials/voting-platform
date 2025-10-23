"use server";

import prisma from "@/lib/prisma";
import { ErrorCode, Result } from "@/types/result";

type Success = {
  type: "success";
  ok: true;
  count: number;
};

export const getVoteCount = async (): Promise<Result<Success>> => {
  try {
    const dateTo = new Date("2025-10-16T00:00:00Z");
    const count = await prisma.vote.count({
      where: { createdAt: { lt: dateTo } },
    });
    return {
      type: "success",
      ok: true,
      count,
    };
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      type: "error",
      code: ErrorCode.DbError,
      message: "failed to get project count",
    };
  }
};
