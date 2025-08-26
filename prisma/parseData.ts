import { z } from "zod";
import { materialSchema } from "../src/lib/validation/projectSchema";
import {
  CONSTRUCTION_TYPOLOGY,
  Stakeholder,
  STAKEHOLDER_TYPE,
} from "@prisma/client";

type MaterialInput = z.infer<typeof materialSchema>;

export function parseMaterials(raw: string): MaterialInput[] {
  const entries = raw
    .split(/Name Material:/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  return entries.map((entry) => {
    const nameMatch = entry.match(/^(.*?),/);
    const name = nameMatch ? nameMatch[1].trim() : "Unknown Material";

    const supplierMatch = entry.match(/Name Supplier:\s*([^,]+),?/);
    const supplierName = supplierMatch
      ? supplierMatch[1].trim()
      : "Unknown Supplier";

    const categoriesMatch = entry.match(
      /Select all applicable material categories:\s*([^\n,]+(?:[,|\n]\s*[^\n,]+)*)/
    );
    const tags = categoriesMatch
      ? categoriesMatch[1]
          .split(/[,|\n]/)
          .map((t) => t.trim())
          .filter(Boolean)
      : [];

    const usedWhereMatch = entry.match(
      /Describe where the material is used:\s*([^,]+),?/
    );
    const usedWhere = usedWhereMatch ? usedWhereMatch[1].trim() : "Unknown use";

    const percentageMatch = entry.match(
      /Estimate what % of the project is built with this material:\s*(\d+)%?/
    );
    const percentage = percentageMatch
      ? parseInt(percentageMatch[1], 10)
      : undefined;

    return {
      materialName: name,
      usedWhere,
      percentage,
      tags,
      supplierName,
      supplierContact: {
        url: null,
        email: null,
        phoneNumber: [],
        locations: [],
      },
      certifications: [],
    };
  });
}

const constructionMap: Record<string, CONSTRUCTION_TYPOLOGY> = {
  "New Build": CONSTRUCTION_TYPOLOGY.NEW,
  Restoration: CONSTRUCTION_TYPOLOGY.RESTORATION,
  "Conversion / Adaptive Reuse": CONSTRUCTION_TYPOLOGY.CONVERSION,
  "Extension / Addition": CONSTRUCTION_TYPOLOGY.EXTENSION,
  Renovation: CONSTRUCTION_TYPOLOGY.RENOVATION,
};

export const parseConstruction = (raw: string) => {
  return raw
    .split("\n")
    .map((v) => v.trim())
    .map((v) => constructionMap[v])
    .filter(Boolean) as CONSTRUCTION_TYPOLOGY[];
};

const stakeholderTypeMap: Record<string, STAKEHOLDER_TYPE> = {
  Architecture: STAKEHOLDER_TYPE.ARCHITECT,
  "Interior Architecture": STAKEHOLDER_TYPE.INTERIOR_ARCHITECT,
  Contractor: STAKEHOLDER_TYPE.CONTRACTOR,
  Engineer: STAKEHOLDER_TYPE.ENGINEER,
};

export function parseStakeholder(
  row: Record<string, string>
): Partial<Stakeholder> {
  const rawTypes = String(
    row["Professional Scope (your role in this project, select all that apply)"]
  )
    .split(/[,;\n]/)
    .map((t) => t.trim());

  const mappedType = rawTypes.map((t) => stakeholderTypeMap[t]);

  const companyName = row["Company name"]?.trim();

  const email = row["Email"] ? [row["Email"].trim()] : [];

  return {
    type: mappedType,
    companyName,
    email,
  };
}
