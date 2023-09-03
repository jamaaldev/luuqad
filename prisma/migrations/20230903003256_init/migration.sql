/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `UserCourses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `UserCourses_user_id_key` ON `UserCourses`(`user_id`);
