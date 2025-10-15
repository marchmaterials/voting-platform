/** @jest-environment node */
import prisma from "@/lib/prisma"
import { createVerifyUrl } from "./verification"

describe("ensure verification works", () => {
    let userId: string
    beforeEach(async () => {
        const email = "dean.shaff@gmail.com"
        const user = await prisma.user.upsert({
            where: {
                email
            },
            create: {
                email
            },
            update: {}
        })
        userId = user.id

    })

    it("should create a proper verification URL", async () => {
        const url = await createVerifyUrl(prisma, "http://localhost:3000", { userId, projectId: "foo", tz: "bar" })
        console.log(url)
    })
})