-- Creating the database
CREATE DATABASE crudnodemysql;

-- Using the database
USE crudnodemysql;

--Creating the table
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- Show all tables
SHOW TABLES;

-- Describe tables
DESCRIBE customer;