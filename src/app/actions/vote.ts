"use server";

import prisma from "@/lib/prisma";

export async function castVote(projectID: string, email: string){
    const user = await prisma.user.upsert({
        where: { email },
        create: { email, voteCount: 0 },
        update: {},
    });

    const [project, updatedUser]  = await prisma.$transaction([
        prisma.project.update({
            where: { id: projectID },
            data: { votes: { increment: 1 } },
        }),
        prisma.user.update({
            where: { id: user.id },
            data: { voteCount: { increment: 1 } },
        }),
    ]);

    return{
        projectVotes: project.votes,
        userVotes: updatedUser.voteCount,
    }
}