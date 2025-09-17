import fs from "fs";
import prisma from "../src/lib/prisma";

async function main() {
    const projects = await prisma.project.findMany({
        include: {
            author: true,
            images: true,
            projectMaterial: { include: { material: { include: { supplier: true } } }, orderBy: { percentage: "desc" } },
            projectStakeholders: { include: { stakeholder: true }, orderBy: { position: "asc" } },
        }
    })

    fs.writeFileSync("dbdump.json", JSON.stringify(projects, null, 2))
}


main()