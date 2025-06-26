/*
  Warnings:

  - Added the required column `completionYear` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `votes` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Made the column `area` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `percentage` to the `ProjectMaterial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Stakeholder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyName` to the `Stakeholder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "completionYear" INTEGER NOT NULL,
ADD COLUMN     "construction" "CONSTRUCTION_TYPOLOGY"[],
ADD COLUMN     "projectLink" TEXT,
ADD COLUMN     "votes" INTEGER NOT NULL,
ALTER COLUMN "area" SET NOT NULL;

-- AlterTable
ALTER TABLE "ProjectMaterial" ADD COLUMN     "percentage" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Stakeholder" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "companyName" TEXT NOT NULL;

-- DropEnum
DROP TYPE "CIRCULAR_TYPOLOGY";

-- DropEnum
DROP TYPE "MATERIAL_TYPOLOGY";
