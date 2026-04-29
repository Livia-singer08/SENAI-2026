/*
  Warnings:

  - You are about to drop the column `dataEvento` on the `eventos` table. All the data in the column will be lost.
  - Added the required column `data_evento` to the `Eventos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `eventos` DROP COLUMN `dataEvento`,
    ADD COLUMN `data_evento` DATETIME(3) NOT NULL;
