/*
  Warnings:

  - Added the required column `alphabets_id` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `unit` ADD COLUMN `alphabets_id` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `Unit_alphabets_id_idx` ON `Unit`(`alphabets_id`);
