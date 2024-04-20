/*
  Warnings:

  - You are about to alter the column `token` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `token` VARCHAR(191) NULL;
