import { Stakeholder, BUILDING_TYPOLOGY } from "@prisma/client";

export interface ProjectSubmissionForm {
  email: string;
  title: string;
  description: string;
  location: string;
  yearCompleted: number;
  typology: BUILDING_TYPOLOGY;
  materials: Array<materialActionState>;
  stakeholders: Array<Stakeholder>;
  area: number;
  imageCredit: string;
  tags: Array<string>;
  certifications?: Array<string>;
}

export interface materialActionState {
  materialName: string;
  description: string;
  usedWhere: string;
  url: string;
  tags: Array<string>;
  supplierName: string;
  supplierContact: Contact;
}

export interface Contact {
  url: string;
  email: Array<string>;
  phoneNumber: Array<string>;
  location: string;
}
