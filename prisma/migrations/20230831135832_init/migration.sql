/*
  Warnings:

  - You are about to drop the column `character_id` on the `courses` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Courses_character_id_idx` ON `courses`;

-- AlterTable
ALTER TABLE `courses` DROP COLUMN `character_id`;
