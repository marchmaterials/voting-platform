/*
  Warnings:

  - You are about to drop the column `locationId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `Stakeholder` table. All the data in the column will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LocationToSupplier` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Stakeholder" DROP CONSTRAINT "Stakeholder_locationId_fkey";

-- DropForeignKey
ALTER TABLE "_LocationToSupplier" DROP CONSTRAINT "_LocationToSupplier_A_fkey";

-- DropForeignKey
ALTER TABLE "_LocationToSupplier" DROP CONSTRAINT "_LocationToSupplier_B_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "locationId",
ADD COLUMN     "location" TEXT;

-- AlterTable
ALTER TABLE "Stakeholder" DROP COLUMN "locationId",
ADD COLUMN     "location" TEXT;

-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "locations" TEXT[];

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "_LocationToSupplier";
