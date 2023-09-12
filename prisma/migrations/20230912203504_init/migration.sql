/*
  Warnings:

  - You are about to drop the column `isSelectedAlphabetCourse` on the `userselected` table. All the data in the column will be lost.
  - Added the required column `isSelectedAlphabetCourse_id` to the `UserSelected` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `userselected` DROP COLUMN `isSelectedAlphabetCourse`,
    ADD COLUMN `isSelectedAlphabetCourse_id` INTEGER NOT NULL;
