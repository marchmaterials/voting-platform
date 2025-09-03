"use server";

import prisma from "@/lib/prisma";

function isSameDate(d1: Date, d2: Date): boolean {
    return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
    )
}

export async function castVote(projectID: string, email: string) {
    const [user] = await prisma.$transaction([prisma.user.findFirst({ where: { email } })]);
    console.log(user)
    if (user === null) {
        const [project, user] = await prisma.$transaction([
            prisma.project.update({
                where: { id: projectID },
                data: { votes: { increment: 1 } },
            }),
            prisma.user.create({
                data: { voteCount: 1, email, lastVote: new Date() }
            })
        ]);
        return {
            projectVotes: project.votes,
            userVotes: user.voteCount,
        }
    } else {
        const now = new Date();
        if (user.lastVote !== null && isSameDate(now, user.lastVote)) {
            const msg = `You voted too recently! Please wait until tomorrow to vote again`
            console.error(msg)
            throw new Error(msg)
        } else {
            const [project, user] = await prisma.$transaction([
                prisma.project.update({
                    where: { id: projectID },
                    data: { votes: { increment: 1 } },
                }),
                prisma.user.update({
                    where: { email },
                    data: { voteCount: { increment: 1 }, email, lastVote: new Date() }
                })
            ]);
            return {
                projectVotes: project.votes,
                userVotes: user.voteCount,
            }
        }
    }
}