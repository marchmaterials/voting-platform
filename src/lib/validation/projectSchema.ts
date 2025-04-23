import { z } from "zod";

// 👇 Each material used in the project
export const materialSchema = z.object({
  materialName: z.string().min(1, "Material name is required"),

  description: z.string().min(5, "Description is required."),

  usedWhere: z
    .string()
    .min(
      1,
      "Please describe where the material is used. Interior / Exterior and on which surface (facade, flooring, etc.)"
    ),

  supplierName: z.string().min(1, "Supplier name is required"),

  url: z.string().url("Must be a valid URL"),
});

// 👇 The entire form structure
export const projectSubmissionSchema = z.object({
  email: z.string().email("Invalid email address"),

  title: z.string().min(1, "Project title is required"),

  description: z
    .string()
    .min(10, "Project description should be more detailed"),

  location: z.string().min(1, "Location is required"),

  yearCompleted: z
    .number()
    .int("Must be a whole number")
    .gte(1900, "Year must be later than 1900")
    .lte(new Date().getFullYear(), "Year cannot be in the future"),

  typology: z.enum([
    "RESIDENTIAL",
    "COMMERCIAL",
    "INDUSTRIAL",
    "INSTITUTIONAL",
  ]),

  materials: z
    .array(materialSchema)
    .min(3, "Please include at least 3 materials"),
});

// 👇 Type inference if needed elsewhere
export type ProjectSubmission = z.infer<typeof projectSubmissionSchema>;
export type Material = z.infer<typeof materialSchema>;
