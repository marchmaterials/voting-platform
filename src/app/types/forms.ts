export interface ProjectSubmissionForm {
  success: boolean;
  email: string;
  title: string;
  description: string;
  location: string;
  yearCompleted: number;
  typology: "RESIDENTIAL" | "COMMERCIAL" | "INDUSTRIAL" | "INSTITUTIONAL";
  materials: Array<materialActionState>;
}

export interface materialActionState {
  materialName: string;
  description: string;
  usedWhere: string;
  supplierName: string;
  url: string;
}
