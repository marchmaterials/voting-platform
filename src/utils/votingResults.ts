"use server";

import prisma from "@/lib/prisma";
import { ErrorCode, Result } from "@/types/result";


type Success = {
    type: "success",
    ok: true,
    count: number
}


export const getVoteCount = async (): Promise<Result<Success>> => {
    try {
        const count = await prisma.vote.count()
        return {
            type: "success",
            ok: true,
            count
        }
    } catch (err) {
        console.error(err);
        return {
            ok: false,
            type: "error",
            code: ErrorCode.DbError,
            message: "failed to get project count"
        }
    }
};


