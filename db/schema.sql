DROP DATABASE IF EXISTS employee_manager_db;
CREATE DATABASE employee_manager_db;

USE employee_manager_db;

DROP TABLE IF EXISTS departments;
CREATE TABLE department (
    id INT NOT NULL AUTO-INCREMENT PRIMARY KEY,
    name varchar(30) NOT NULL,
    UNIQUE(name)
);

DROP TABLE IF EXISTS roll;
CREATE TABLE roll (
     id INT PRIMARY KEY
    title VARCHAR(30)
    salary DECIMAL
    department_id INT    
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT PRIMARY KEY
    first_name VARCHAR(30)
    last_name VARCHAR(30)
    role_id INT
    manager_id INT
);