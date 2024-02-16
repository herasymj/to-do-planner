/*
  Warnings:

  - You are about to drop the `listitem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `listitem`;

-- CreateTable
CREATE TABLE `Task` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `taskTitle` VARCHAR(191) NOT NULL,
    `isComplete` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
