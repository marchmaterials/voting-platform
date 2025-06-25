-- CreateEnum
CREATE TYPE "CIRCULAR_TYPOLOGY" AS ENUM ('RECLAIMED', 'REPURPOSED', 'RECYCLED', 'REUSEABLE');

-- CreateEnum
CREATE TYPE "MATERIAL_TYPOLOGY" AS ENUM ('BIOBASED', 'BIODEGRADABLE', 'CIRCULAR', 'LOCAL');

-- CreateEnum
CREATE TYPE "CONSTRUCTION_TYPOLOGY" AS ENUM ('NEW', 'EXTENSION', 'RENOVATION', 'RESTORATION', 'CONVERSION');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "BUILDING_TYPOLOGY" ADD VALUE 'MIXED_USE';
ALTER TYPE "BUILDING_TYPOLOGY" ADD VALUE 'HEALTHCARE';

-- AlterEnum
ALTER TYPE "STAKEHOLDER_TYPE" ADD VALUE 'INTERIOR_ARCHITECT';
