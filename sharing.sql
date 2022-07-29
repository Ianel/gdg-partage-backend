/* Create the database */
CREATE DATABASE IF NOT EXISTS `gdg`;

/* Use the database */
USE `gdg`;

/* Create table */
CREATE TABLE IF NOT EXISTS `sharing`(
    `id_sharing` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `label` VARCHAR(100) NOT NULL,
    `date` DATE NOT NULL,
    `place` VARCHAR(100) NOT NULL,
    `time` TIME NOT NULL,
    `author` VARCHAR(100) NOT NULL,
    `details` TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

