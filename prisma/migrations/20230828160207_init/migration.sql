/*
  Warnings:

  - You are about to drop the column `direction_fk` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_direction_fk_idx` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `direction_fk`;

-- CreateTable
CREATE TABLE `Courses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `direction_fk` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Courses_id_key`(`id`),
    INDEX `Courses_direction_fk_idx`(`direction_fk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
