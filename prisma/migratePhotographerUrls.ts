import fs from "fs";
import { parse } from "csv-parse/sync";
import prisma from "../src/lib/prisma";
import { parsePhotographer } from "./parseData";
import { stakeholder } from "../src/lib/validation/projectSchema"; // your Zod schema

async function main(csvPath: string) {
    const raw = fs.readFileSync(csvPath, "utf-8");
    const records = parse(raw, {
        columns: true,
        // delimiter: ";",
        skip_empty_lines: true,
    });
    const typedRecords = records as Array<Record<string, string>>;
    for (const row of typedRecords) {
        const title = row["Project Name"];
        // we don't have any existing photographers; add
        const photographersValidated = parsePhotographer(row).map(s => stakeholder.parse(s))
        const update = {
            stakeholders: { create: photographersValidated },
            imageCredit: row["Image Rights"],
        }
        const project = await prisma.project.findFirst({ where: { title } })
        if (project === null) {
            throw new Error(`Couldn't find project with title ${title}`)
        }
        await prisma.project.update({ where: { id: project.id }, data: update })
    }
}

main("jotformData.11-09-2025.csv")