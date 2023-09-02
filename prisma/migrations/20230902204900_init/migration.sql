/*
  Warnings:

  - A unique constraint covering the columns `[isSelected]` on the table `UserCourses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `UserCourses_isSelected_key` ON `UserCourses`(`isSelected`);
