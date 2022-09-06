CREATE DATABASE localhost;

-- Drop and recreate Employees table
DROP TABLE IF EXISTS employees CASCADE;

CREATE TABLE employees (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  salary BIGINT NOT NULL
);
