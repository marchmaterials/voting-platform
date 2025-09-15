// we had an architect who wanted to change the title image for their project. This script does just that!
import prisma from "../src/lib/prisma";


async function main() {
    const projects = await prisma.project.findMany({ select: { stakeholders: true, id: true } })
    let totalUpdates = 0
    for (const project of projects) {
        const rows = project.stakeholders.map((s, idx) => ({
            projectId: project.id,
            stakeholderId: s.id,
            position: 10 * idx
        }))

        const res = await prisma.projectStakeholder.createMany({
            data: rows,
            skipDuplicates: true,
        });
        totalUpdates += res.count
    }

    console.log(`Updated ${totalUpdates} rows`)
}

main()