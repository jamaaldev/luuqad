/*
  Warnings:

  - A unique constraint covering the columns `[alphabet_id]` on the table `Courses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Courses_alphabet_id_key` ON `Courses`(`alphabet_id`);
