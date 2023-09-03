/*
  Warnings:

  - A unique constraint covering the columns `[isSelected]` on the table `UserCourses` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `UserCourses_user_id_key` ON `usercourses`;

-- CreateIndex
CREATE UNIQUE INDEX `UserCourses_isSelected_key` ON `UserCourses`(`isSelected`);
