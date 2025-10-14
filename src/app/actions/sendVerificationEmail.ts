"use server"
import { createTransporter, Email, sendEmail } from "@/utils/mailer"
import { USER_TYPE } from "@prisma/client"

import prisma from "@/lib/prisma";
import { createVerificationEmail, createVerifyUrl } from "@/utils/verification";


interface Success {
    type: "success",
    ok: true
}

interface SendVerificationEmailError {
    type: "error",
    message: string,
    ok: false
}


type SendVerificationEmailResult = Success | SendVerificationEmailError


export async function sendVerificationEmail(projectId: string, email: string, userType: USER_TYPE, tz: string): Promise<SendVerificationEmailResult> {

    const baseUrl = process.env.VERCEL_URL ?? "http://localhost:3000"
    let verificationEmail: Email
    try {
        const verifyUrl = await prisma.$transaction(async (tx) => {
            let user = await prisma.user.findFirst({ where: { email } })
            if (user === null) {
                user = await prisma.user.create({ data: { email, type: userType } })
            }
            if (user === null) {
                throw new Error("Couldn't create new user!")
            }
            const verifyUrl = await createVerifyUrl(tx, baseUrl, { userId: user.id, projectId, tz })
            return verifyUrl
        })
        verificationEmail = createVerificationEmail(email, verifyUrl)
    } catch (err) {
        console.error("Failed to create verification URL", err)
        return {
            type: "error",
            message: "Failed to create verification URL",
            ok: false
        }
    }

    try {
        const transporter = createTransporter()
        await sendEmail(transporter, verificationEmail)
    } catch (err) {
        console.error("Failed to send verification email", err)
        return {
            type: "error",
            message: "Failed to send verification email",
            ok: false
        }
    }

    return {
        type: "success",
        ok: true
    }

}