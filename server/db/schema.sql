DROP DATABASE IF EXISTS cottage_db;
CREATE DATABASE cottage_db;

USE cottage_db;

CREATE TABLE projects (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    project_details VARCHAR(100) NOT NULL
)