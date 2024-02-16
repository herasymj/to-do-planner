-- CreateTable
CREATE TABLE `ListItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `itemTitle` VARCHAR(191) NOT NULL,
    `isComplete` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

