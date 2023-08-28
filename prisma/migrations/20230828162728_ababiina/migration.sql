/*
  Warnings:

  - You are about to drop the column `Subtitle` on the `alphabets` table. All the data in the column will be lost.
  - Added the required column `SubTitle` to the `AlphaBets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alphabets` DROP COLUMN `Subtitle`,
    ADD COLUMN `SubTitle` VARCHAR(191) NOT NULL;
