-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role` ENUM('admin', 'user') NOT NULL DEFAULT 'user',
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `oauth_id` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `oauth_provider` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_oauth_id_key`(`oauth_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Unit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Section` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `unit_id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `Section_unit_id_idx`(`unit_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Question` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `section_id` INTEGER NOT NULL,
    `question_type_id` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `points` INTEGER NOT NULL,
    `audio` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `Question_section_id_idx`(`section_id`),
    INDEX `Question_question_type_id_idx`(`question_type_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `QuestionType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Answer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question_id` INTEGER NOT NULL,
    `answer` VARCHAR(191) NOT NULL,
    `is_correct` BOOLEAN NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `audio` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `Answer_question_id_idx`(`question_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Result` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `section_id` INTEGER NOT NULL,
    `question_id` INTEGER NOT NULL,
    `answer_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `Result_user_id_idx`(`user_id`),
    INDEX `Result_section_id_idx`(`section_id`),
    INDEX `Result_question_id_idx`(`question_id`),
    INDEX `Result_answer_id_idx`(`answer_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Point` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `points` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `Point_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserSection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `section_id` INTEGER NOT NULL,
    `completed` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `UserSection_user_id_idx`(`user_id`),
    INDEX `UserSection_section_id_idx`(`section_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlphaBets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Title` VARCHAR(191) NOT NULL,
    `SubTitle` VARCHAR(191) NOT NULL,
    `Langauge` VARCHAR(191) NOT NULL,
    `Translate` VARCHAR(191) NOT NULL,
    `Direction` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AlphaBets_id_key`(`id`),
    UNIQUE INDEX `AlphaBets_Direction_key`(`Direction`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Characters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Character` VARCHAR(191) NOT NULL,
    `Transliteration` VARCHAR(191) NOT NULL,
    `TsAUrl` VARCHAR(191) NOT NULL,
    `StrengthProgress` DOUBLE NOT NULL DEFAULT 0.0,
    `State` VARCHAR(191) NOT NULL,
    `Direction_fk` VARCHAR(191) NOT NULL,

    INDEX `Characters_Direction_fk_idx`(`Direction_fk`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Courses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `Direction_fk` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Courses_id_key`(`id`),
    UNIQUE INDEX `Courses_Direction_fk_key`(`Direction_fk`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
