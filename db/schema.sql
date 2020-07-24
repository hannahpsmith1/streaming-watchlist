DROP DATABASE IF EXISTS streaming_db;
CREATE DATABASE streaming_db;
USE streaming_db;

CREATE TABLE `media` (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR (100) NOT NULL,
    watched BOOLEAN
    PRIMARY KEY (id)
);