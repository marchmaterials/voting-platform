import { Stakeholder, BUILDING_TYPOLOGY } from "@prisma/client";
import { z } from "zod";
import {
  materialSchema,
  projectSubmissionSchema,
} from "@/lib/validation/projectSchema";

// export interface ProjectSubmissionForm {
//   email: string;
//   title: string;
//   description: string;
//   location: string;
//   yearCompleted: number;
//   typology: BUILDING_TYPOLOGY;
//   materials: Array<materialActionState>;
//   stakeholders: Array<Stakeholder>;
//   area: number;
//   imageCredit: string;
// }

export type ProjectSubmissionForm = z.infer<typeof projectSubmissionSchema>;

export type materialActionState = z.infer<typeof materialSchema>;
// export interface materialActionState {
//   materialName: string;
//   description: string;
//   usedWhere: string;
//   url: string;
//   tags: Array<string>;
//   supplierName: string;
//   supplierContact: Contact;
//   certifications: Array<string>;
// }

export interface Contact {
  url: string;
  email: Array<string>;
  phoneNumber: Array<string>;
  location: string;
}
