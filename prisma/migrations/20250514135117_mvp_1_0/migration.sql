/*
  Warnings:

  - Added the required column `area` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "STAKEHOLDER_TYPE" AS ENUM ('ARCHITECT', 'CONTRACTOR', 'ENGINEER');

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "aiTags" TEXT[],
ADD COLUMN     "credit" TEXT;

-- AlterTable
ALTER TABLE "Material" ADD COLUMN     "certifications" TEXT[],
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "area" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "email" TEXT[],
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT[];

-- CreateTable
CREATE TABLE "Stakeholder" (
    "id" TEXT NOT NULL,
    "type" "STAKEHOLDER_TYPE" NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT[],
    "phoneNumber" TEXT[],

    CONSTRAINT "Stakeholder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectToStakeholder" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProjectToStakeholder_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ImageToMaterial" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ImageToMaterial_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectToStakeholder_B_index" ON "_ProjectToStakeholder"("B");

-- CreateIndex
CREATE INDEX "_ImageToMaterial_B_index" ON "_ImageToMaterial"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToStakeholder" ADD CONSTRAINT "_ProjectToStakeholder_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToStakeholder" ADD CONSTRAINT "_ProjectToStakeholder_B_fkey" FOREIGN KEY ("B") REFERENCES "Stakeholder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImageToMaterial" ADD CONSTRAINT "_ImageToMaterial_A_fkey" FOREIGN KEY ("A") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImageToMaterial" ADD CONSTRAINT "_ImageToMaterial_B_fkey" FOREIGN KEY ("B") REFERENCES "Material"("id") ON DELETE CASCADE ON UPDATE CASCADE;
