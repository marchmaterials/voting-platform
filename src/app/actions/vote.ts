"use server";

import prisma from "@/lib/prisma";

// this is one day, in millesconds
const lastVoteInterval = 3600 * 1000 * 24

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
        const diff = now - user.lastVote;
        if (diff < lastVoteInterval) {
            const waitingTime = lastVoteInterval - diff
            console.log(waitingTime)
            const msg = `You voted too recently! Wait another ${(waitingTime / (3600 * 1000)).toFixed(0)} hours to vote again!`
            console.error(msg)
            throw new Error(msg)
        } else {
            const [project, user] = await prisma.$transaction([
                prisma.project.update({
                    where: { id: projectID },
                    data: { votes: { increment: 1 } },
                }),
                prisma.user.update({
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