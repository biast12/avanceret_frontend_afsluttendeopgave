CREATE TABLE `homepage`(
    `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `href` TEXT NOT NULL,
    `src` TEXT NOT NULL,
    `alt` TEXT NOT NULL
);
CREATE TABLE `email`(
    `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `page_id` INT NULL,
    `src` TEXT NOT NULL,
    `email` TEXT NOT NULL
);
CREATE TABLE `page1`(
    `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `img_src` TEXT NOT NULL,
    `title` TEXT NOT NULL,
    `text1` TEXT NOT NULL,
    `text2` TEXT NOT NULL,
    `text3` TEXT NOT NULL
);
CREATE TABLE `page3`(
    `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `img_src` TEXT NOT NULL,
    `title` TEXT NOT NULL,
    `text1` TEXT NOT NULL,
    `text2` TEXT NOT NULL
);
CREATE TABLE `page2`(
    `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `img_src` TEXT NOT NULL,
    `title` TEXT NOT NULL,
    `text1` TEXT NOT NULL,
    `text2` TEXT NOT NULL,
    `text3` TEXT NOT NULL
);
CREATE TABLE `all_tables`(
    `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `HomePage` INT NULL,
    `nav` INT NULL,
    `Page1` INT NULL,
    `Page2` INT NULL,
    `Page3` INT NULL
);
CREATE TABLE `nav`(
    `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `href` TEXT NOT NULL,
    `src` TEXT NOT NULL,
    `alt` TEXT NOT NULL
);
ALTER TABLE
    `all_tables` ADD CONSTRAINT `all_tables_page3_foreign` FOREIGN KEY(`Page3`) REFERENCES `page3`(`_id`);
ALTER TABLE
    `all_tables` ADD CONSTRAINT `all_tables_page1_foreign` FOREIGN KEY(`Page1`) REFERENCES `page1`(`_id`);
ALTER TABLE
    `all_tables` ADD CONSTRAINT `all_tables_page2_foreign` FOREIGN KEY(`Page2`) REFERENCES `page2`(`_id`);
ALTER TABLE
    `email` ADD CONSTRAINT `email_page_id_foreign` FOREIGN KEY(`page_id`) REFERENCES `page3`(`_id`);
ALTER TABLE
    `all_tables` ADD CONSTRAINT `all_tables_homepage_foreign` FOREIGN KEY(`HomePage`) REFERENCES `homepage`(`_id`);
ALTER TABLE
    `all_tables` ADD CONSTRAINT `all_tables_nav_foreign` FOREIGN KEY(`nav`) REFERENCES `nav`(`_id`);