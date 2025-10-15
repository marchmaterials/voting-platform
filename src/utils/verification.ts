// utils/verification.ts
import crypto from "node:crypto";
import prisma, { Tx } from "../lib/prisma";
import { Email } from "./mailer";
import { encryptOpaque } from "./cryptoOpaque";

function base64url(buf: Buffer) {
    return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export type CreateVerificationTokenParams = {
    userId: string,
    projectId: string,
    tz: string
}


async function createEmailVerificationToken(tx: Tx | typeof prisma, { userId, projectId, tz }: CreateVerificationTokenParams): Promise<[string, string]> {
    const raw = base64url(crypto.randomBytes(32));                 // send this to user
    const tokenHash = crypto.createHash("sha256").update(raw).digest("hex"); // store only hash
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60); // 60 min

    const payload = encryptOpaque({ projectId: projectId, tz: tz })

    // Invalidate previous unused tokens for this user (optional hardening)
    await tx.verificationToken.deleteMany({
        where: { userId, usedAt: null }
    });

    await tx.verificationToken.create({
        data: { userId, tokenHash, expiresAt }
    });

    return [raw, payload];
}

export async function createVerifyUrl(tx: Tx | typeof prisma, baseUrl: string, { userId, projectId, tz }: CreateVerificationTokenParams): Promise<string> {
    const [token, payload] = await createEmailVerificationToken(tx, { userId, projectId, tz })
    const url = new URL(`${baseUrl}/verify`)
    url.searchParams.set("token", token)
    url.searchParams.set("d", payload)
    return url.toString()
}


export function createVerificationEmail(to: string, verifyUrl: string): Email {
    return {
        to,
        subject: "Verify your email",
        text: `Tap to verify your email: ${verifyUrl} (valid for 30 minutes)`,
        html: `
      <p>In order to place your vote, confirm your email address for <b>MARCH</b>.</p>
      <p><a href="${verifyUrl}">Verify my email</a></p>
      <p style="color:#666">Link expires in 60 minutes.</p>
    `,
    }
}

