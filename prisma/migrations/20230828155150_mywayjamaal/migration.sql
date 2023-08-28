/*
  Warnings:

  - The primary key for the `alphabets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `alphabets` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `alphabets` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `direction_fk` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `AlphaBets_user_id_idx` ON `alphabets`;

-- AlterTable
ALTER TABLE `alphabets` DROP PRIMARY KEY,
    DROP COLUMN `user_id`,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` ADD COLUMN `direction_fk` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `User_direction_fk_idx` ON `User`(`direction_fk`);
