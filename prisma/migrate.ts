import { BUILDING_TYPOLOGY } from "@prisma/client";
import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";
import { projectSubmissionSchema } from "../src/lib/validation/projectSchema"; // your Zod schema
import { z } from "zod";
import prisma from "../src/lib/prisma";
import {
  parseMaterials,
  parseConstruction,
  parseStakeholder,
} from "./parseData";
import { createMaterialsAndConnections } from "./seed";

async function importProjects(csvPath: string) {
  const raw = fs.readFileSync(csvPath, "utf-8");
  const records = parse(raw, {
    columns: true,
    delimiter: ";",
    skip_empty_lines: true,
  });

  for (const row of records) {
    try {
      // --- Map CSV → Prisma-compatible shape ---
      const [city, country] = (row["Project Location (Europe or UK)"] || "")
        .split(" ")
        .map((s) => s.trim());
      const addressParts = row["Address"].split(",").map((s) => s.trim());
      const street = addressParts[0] || null;
      const postcode = addressParts.length > 1 ? addressParts[1] : null;

      const typologyRaw = (
        row["Project Typology (select all that apply)"] || ""
      )
        .split(",")
        .map((t) => t.trim().toUpperCase())
        .filter(Boolean);

      const typology = typologyRaw.map((t) => {
        if (
          Object.values(BUILDING_TYPOLOGY).includes(
            t.toUpperCase() as BUILDING_TYPOLOGY
          )
        ) {
          return t as BUILDING_TYPOLOGY;
        }
        return BUILDING_TYPOLOGY.OTHER;
      });

      // Prepare the object for validation
      const submission = {
        email: row["Email"],
        title: row["Project Name"],
        description: row["Short Project Description"],
        location: {
          city,
          country,
          street,
          postcode,
        },
        yearCompleted: parseInt(row["Year of Project Completion"]),
        typology,
        materials: parseMaterials(row["List Materials"]),
        stakeholders: parseStakeholder(row as Record<string, string>),
        area: parseInt(row["Project Built Area"]),
        imageCredit: row["Image Credits"],
        construction: parseConstruction(
          row["Construction Type (select all that apply)"]
        ),
      };

      // --- Validate with Zod ---
      const validated = projectSubmissionSchema.parse(submission);

      // --- Upsert user ---
      const user = await prisma.user.upsert({
        where: { email: validated.email },
        update: {},
        create: { email: validated.email },
      });

      // --- Upsert location ---
      const location = await prisma.location.create({
        data: {
          city: validated.location.city,
          country: validated.location.country,
          street: validated.location.street,
          postcode: validated.location.postcode,
        },
      });

      // --- Create project ---
      const project = await prisma.project.create({
        data: {
          title: validated.title,
          description: validated.description,
          yearCompleted: validated.yearCompleted,
          typology: validated.typology,
          area: validated.area,
          construction: validated.construction,
          locationId: location.id,
          authorId: user.id,
        },
      });

      await createMaterialsAndConnections(validated.materials, project.id);
      await prisma.stakeholder.create({
        data: {
          companyName: submission.stakeholders.companyName,
          email: submission.stakeholders.email,
          type: submission.stakeholders.type,
          projects: { connect: { id: project.id } },
        },
      });
      

      console.log(`Imported project: ${validated.title}`);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Validation failed for row:", row["Project Name"], error);
      } else {
        console.error("Failed to import row:", row["Project Name"], error);
      }
    }
  }

  await prisma.$disconnect();
}

// Run script
const csvFile = path.resolve(process.argv[2] || "jotformData.csv");
importProjects(csvFile);
