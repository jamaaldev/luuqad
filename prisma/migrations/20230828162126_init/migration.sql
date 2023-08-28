/*
  Warnings:

  - You are about to drop the column `direction` on the `alphabets` table. All the data in the column will be lost.
  - You are about to drop the column `langauge` on the `alphabets` table. All the data in the column will be lost.
  - You are about to drop the column `subtitle` on the `alphabets` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `alphabets` table. All the data in the column will be lost.
  - You are about to drop the column `translate` on the `alphabets` table. All the data in the column will be lost.
  - You are about to drop the column `character` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `direction_fk` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `strengthprogress` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `transliteration` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `tsaurl` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `direction_fk` on the `courses` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Direction]` on the table `AlphaBets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Direction` to the `AlphaBets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Langauge` to the `AlphaBets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Subtitle` to the `AlphaBets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Title` to the `AlphaBets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Translate` to the `AlphaBets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Character` to the `Characters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Direction_fk` to the `Characters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `State` to the `Characters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Transliteration` to the `Characters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TsAUrl` to the `Characters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Direction_fk` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `AlphaBets_direction_key` ON `alphabets`;

-- DropIndex
DROP INDEX `Characters_direction_fk_idx` ON `characters`;

-- DropIndex
DROP INDEX `Courses_direction_fk_idx` ON `courses`;

-- AlterTable
ALTER TABLE `alphabets` DROP COLUMN `direction`,
    DROP COLUMN `langauge`,
    DROP COLUMN `subtitle`,
    DROP COLUMN `title`,
    DROP COLUMN `translate`,
    ADD COLUMN `Direction` VARCHAR(191) NOT NULL,
    ADD COLUMN `Langauge` VARCHAR(191) NOT NULL,
    ADD COLUMN `Subtitle` VARCHAR(191) NOT NULL,
    ADD COLUMN `Title` VARCHAR(191) NOT NULL,
    ADD COLUMN `Translate` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `characters` DROP COLUMN `character`,
    DROP COLUMN `direction_fk`,
    DROP COLUMN `state`,
    DROP COLUMN `strengthprogress`,
    DROP COLUMN `transliteration`,
    DROP COLUMN `tsaurl`,
    ADD COLUMN `Character` VARCHAR(191) NOT NULL,
    ADD COLUMN `Direction_fk` VARCHAR(191) NOT NULL,
    ADD COLUMN `State` VARCHAR(191) NOT NULL,
    ADD COLUMN `StrengthProgress` DOUBLE NOT NULL DEFAULT 0.0,
    ADD COLUMN `Transliteration` VARCHAR(191) NOT NULL,
    ADD COLUMN `TsAUrl` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `courses` DROP COLUMN `direction_fk`,
    ADD COLUMN `Direction_fk` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `AlphaBets_Direction_key` ON `AlphaBets`(`Direction`);

-- CreateIndex
CREATE INDEX `Characters_Direction_fk_idx` ON `Characters`(`Direction_fk`);

-- CreateIndex
CREATE INDEX `Courses_Direction_fk_idx` ON `Courses`(`Direction_fk`);
