"use server";

import prisma from "@/lib/prisma";

export async function castVote(projectID: string, email: string){
    const [project, user]  = await prisma.$transaction([
        prisma.project.update({
            where: { id: projectID },
            data: { votes: { increment: 1 } },
        }),
        prisma.user.upsert({
            where: { email },
            create: { email, voteCount: 1 },
            update: { voteCount: { increment: 1 } },
        }),
    ]);

    return{
        projectVotes: project.votes,
        userVotes: user.voteCount,
    }
}