/*
  Warnings:

  - You are about to drop the column `lastVote` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_MaterialToProject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProjectToStakeholder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MaterialToProject" DROP CONSTRAINT "_MaterialToProject_A_fkey";

-- DropForeignKey
ALTER TABLE "_MaterialToProject" DROP CONSTRAINT "_MaterialToProject_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToStakeholder" DROP CONSTRAINT "_ProjectToStakeholder_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToStakeholder" DROP CONSTRAINT "_ProjectToStakeholder_B_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "lastVote";

-- DropTable
DROP TABLE "_MaterialToProject";

-- DropTable
DROP TABLE "_ProjectToStakeholder";
