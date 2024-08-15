CREATE TABLE `homepage`(
    `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `href` TEXT NOT NULL,
    `src` TEXT NOT NULL
);
CREATE TABLE `emails`(
    `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `created_at` TIMESTAMP NOT NULL DEFAULT 'now()',
    `to` TEXT NULL,
    `email` TEXT NULL,
    `subject` TEXT NULL,
    `message` TEXT NULL
);
CREATE TABLE `email`(
    `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `page_id` INT NULL,
    `src` TEXT NOT NULL,
    `email` TEXT NOT NULL
);
CREATE TABLE `page1`(
    `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `currentPage` ENUM('') NOT NULL,
    `img_src` TEXT NOT NULL,
    `title` TEXT NOT NULL,
    `text1` TEXT NOT NULL,
    `text2` TEXT NOT NULL,
    `text3` TEXT NOT NULL,
    `text_bottom` TEXT NOT NULL
);
CREATE TABLE `page3`(
    `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `currentPage` ENUM('') NOT NULL,
    `img_src` TEXT NOT NULL,
    `title` TEXT NOT NULL,
    `text1` TEXT NOT NULL,
    `text2` TEXT NOT NULL,
    `text_bottom` TEXT NOT NULL
);
CREATE TABLE `page2`(
    `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `currentPage` ENUM('') NOT NULL,
    `img_src` TEXT NOT NULL,
    `title` TEXT NOT NULL,
    `text1` TEXT NOT NULL,
    `text2` TEXT NOT NULL,
    `text3` TEXT NOT NULL,
    `text_bottom` TEXT NOT NULL
);
CREATE TABLE `nav`(
    `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `href` TEXT NOT NULL,
    `src` TEXT NOT NULL
);
ALTER TABLE
    `email` ADD CONSTRAINT `email_page_id_foreign` FOREIGN KEY(`page_id`) REFERENCES `page3`(`_id`);