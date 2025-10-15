import nodemailer from "nodemailer"
import type { Transporter } from "nodemailer";


export function createTransporter(): Transporter {
    return nodemailer.createTransport({
        host: "mail.privateemail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });
}

export type Email = {
    to: string,
    text: string,
    html: string,
    subject: string
}


export async function sendEmail(transporter: Transporter, email: Email) {
    return await transporter.sendMail({
        from: '"March Materials" <info@marchmaterials.com>',
        to: email.to,
        subject: email.subject,
        text: email.text,
        html: email.html,
        headers: { "X-Entity-Ref-ID": crypto.randomUUID() }, // optional for traceability
    });
}
