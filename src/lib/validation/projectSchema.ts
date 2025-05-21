import { z } from "zod";
import {
  BUILDING_TYPOLOGY,
  STAKEHOLDER_TYPE,
} from "../../../prisma/generated/client";

export const materialSchema = z.object({
  materialName: z.string().min(1, "Material name is required"),

  description: z.string().min(5, "Description is required."),

  usedWhere: z
    .string()
    .min(
      1,
      "Please describe where the material is used. Interior / Exterior and on which surface (facade, flooring, etc.)"
    ),

  url: z.string().url("Must be a valid URL"),

  tags: z.array(z.string()),

  supplierName: z.string().min(1, "Supplier name is required"),

  supplierContact: z.object({
    url: z.string().url("Must be a valid URL"),

    email: z.array(z.string().email()).nullish(),

    phoneNumber: z.array(z.string().min(8).max(25)),

    location: z.string().min(2),
  }),

  certifications: z.array(z.string()).nullish(),
});

export const stakeholder = z.object({
  type: z.enum([
    STAKEHOLDER_TYPE.ARCHITECT,
    STAKEHOLDER_TYPE.CONTRACTOR,
    STAKEHOLDER_TYPE.ENGINEER,
  ]),
  name: z.string().min(2),

  email: z.array(z.string().email()),

  phoneNumber: z.array(z.string().min(8).max(19)),
});

export const projectSubmissionSchema = z.object({
  email: z.string().email("Invalid email address"),

  title: z.string().min(1, "Project title is required"),

  description: z
    .string()
    .min(10, "Project description should be more detailed"),

  location: z.string().min(2, "Location is required"),

  yearCompleted: z
    .number()
    .int("Must be a whole number")
    .gte(1900, "Year must be later than 1900")
    .lte(new Date().getFullYear(), "Year cannot be in the future"),

  typology: z.enum([
    BUILDING_TYPOLOGY.RESIDENTIAL,
    BUILDING_TYPOLOGY.COMMERCIAL,
    BUILDING_TYPOLOGY.INDUSTRIAL,
    BUILDING_TYPOLOGY.INSTITUTIONAL,
  ]),

  materials: z
    .array(materialSchema)
    .min(3, "Please include at least 3 materials"),

  stakeholders: z.array(stakeholder),

  area: z.number().int(),

  imageCredit: z.string(),
});

// 👇 Type inference if needed elsewhere
export type ProjectSubmission = z.infer<typeof projectSubmissionSchema>;
export type Material = z.infer<typeof materialSchema>;
