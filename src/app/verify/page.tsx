"use server"
import crypto from "node:crypto";
import prisma from "@/lib/prisma";
import { redirect } from 'next/navigation'
import { decryptOpaque } from "@/utils/cryptoOpaque";
import { castVoteExistingUser } from "../actions/vote";
import { USER_TYPE } from "@prisma/client";

interface VerifyProps {
    searchParams?: { [key: string]: string | undefined }
}

type Payload = {
    projectId: string,
    tz: string,
    userType: USER_TYPE,
}

export default async function Verify({ searchParams }: VerifyProps) {
    if (!searchParams) {
        redirect("/dashboard")
    }
    const token = searchParams["token"]

    if (!token) {
        redirect("/dashboard")
    }

    const payload = searchParams["d"]
    if (!payload) {
        redirect("/dashboard")
    }
    const { projectId, tz, userType } = decryptOpaque(payload) as Payload

    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");

    const vt = await prisma.verificationToken.findFirst({ where: { tokenHash } });
    if (vt === null) {
        return <div>Couldn't find token</div>
    }

    const now = new Date()

    if (now > vt.expiresAt) {
        return <div>Token has already expired</div>
    }

    const res = await prisma.$transaction(async (tx) => {
        const user = await tx.user.update({ where: { id: vt.userId }, data: { verified: true, type: userType } });
        await tx.verificationToken.update({ where: { id: vt.id, tokenHash }, data: { usedAt: new Date() } });
        return await castVoteExistingUser(tx, projectId, user, tz)
    })
    switch (res.type) {
        case "success":
            return (
                <div className="flex flex-col justify-center items-center">
                    <div>
                        Successfully voted for project {res.projectTitle}
                    </div>
                    <div>
                        <a href={`/project/${res.projectSlug}`}><button>Click here to return to project</button></a>
                    </div>
                </div>
            )
        case "alreadyVoted":
            return (
                <div className="flex flex-col justify-center items-center">
                    <div>
                        Looks like you already voted today
                    </div>
                    <div>
                        <a href={`/dashboard`}><button>Click here to return to dashboard</button></a>
                    </div>
                </div>
            )
        case "error":
            return <div className="flex justify-center items-center">Looks like there was an error: {res.message}</div>
    }


}