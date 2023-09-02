/*
  Warnings:

  - You are about to alter the column `isSelected` on the `usercourses` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `usercourses` MODIFY `isSelected` BOOLEAN NOT NULL;
