-- CreateTable
CREATE TABLE `UserSelected` (
    `id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `isSelected` INTEGER NOT NULL,

    UNIQUE INDEX `UserSelected_id_key`(`id`),
    UNIQUE INDEX `UserSelected_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
