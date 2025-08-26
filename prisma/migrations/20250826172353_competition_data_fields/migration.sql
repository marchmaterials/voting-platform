/*
  Warnings:

  - Changed the column `typology` on the `Project` table from a scalar field to a list field. If there are non-null values in that column, this step will fail.
  - Changed the column `construction` on the `Project` table from a scalar field to a list field. If there are non-null values in that column, this step will fail.

*/
-- AlterEnum
ALTER TYPE "BUILDING_TYPOLOGY" ADD VALUE 'OTHER';

-- AlterTable
ALTER TABLE "Project" 
ALTER COLUMN "typology" SET DATA TYPE "BUILDING_TYPOLOGY"[] USING ARRAY["typology"]::"BUILDING_TYPOLOGY"[],
ALTER COLUMN "construction" SET DATA TYPE "CONSTRUCTION_TYPOLOGY"[] USING ARRAY["construction"]::"CONSTRUCTION_TYPOLOGY"[];

-- AlterTable
ALTER TABLE "Stakeholder" ADD COLUMN     "url" TEXT;
