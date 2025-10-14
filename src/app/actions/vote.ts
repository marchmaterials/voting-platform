"use server";

import prisma, { Tx } from "@/lib/prisma";
import { Prisma, User, USER_TYPE, Vote } from "@prisma/client";
import slugify from "slugify";


interface VoteSuccess {
    type: "success",
    projectVotes: number,
    userVotes: number,
    projectTitle: string,
    projectSlug: string,
    vote: Vote,
    ok: true
}

interface AlreadyVoted {
    type: "alreadyVoted",
    ok: false
}

interface VoteError {
    type: "error",
    message: string,
    ok: false
}


/** Return yyyy-mm-dd string representing the user's local calendar day 
 * now: current datetime
 * tz: client's timezone, of the form "Europe/Berlin"
*/
function voteDayInTZ(now: Date, tz: string) {
    // Format the user's *local* date (yyyy-mm-dd)
    const local = new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" })
        .format(now); // e.g. "2025-09-12"
    return local; // "YYYY-MM-DD"
}

export async function castVoteExistingUser(tx: Tx | typeof prisma, projectId: string, user: User, timezone: string): Promise<VoteSuccess | AlreadyVoted | VoteError> {
    const voteOnStr = voteDayInTZ(new Date(), timezone)
    const voteOn = new Date(`${voteOnStr}T00:00:00.000Z`)

    try {
        const vote = await tx.vote.create({
            data: { userId: user.id, projectId, voteOn },
        });
        const project = await tx.project.update({
            where: { id: projectId },
            data: { votes: { increment: 1 } },
        });
        const userUpdated = await tx.user.update({
            where: { id: user.id },
            data: { voteCount: { increment: 1 }, type: user.type },
        });
        return {
            type: "success",
            projectVotes: project.votes,
            userVotes: userUpdated.voteCount,
            projectTitle: project.title,
            projectSlug: slugify(project.title),
            vote,
            ok: true
        }
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
            return {
                type: "alreadyVoted",
                ok: false
            }
        }
        throw err
    }
}


export async function castVote(tx: Tx | typeof prisma, projectId: string, email: string, userType: USER_TYPE, timezone: string): Promise<VoteSuccess | AlreadyVoted | VoteError> {

    let user = await tx.user.findFirst({ where: { email } })
    if (user === null) {
        user = await tx.user.create({ data: { email, type: userType } })
    }
    return await castVoteExistingUser(tx, projectId, user, timezone)

}