/*
 Principal commands with PostgreSQL:
 - \l => list all database in postgresql
 - \c => move inside a database -> \c [data_base_name]
 - \dt => show table in database
 
 Access to the postgreSQL manager in terminal
 - psql -U postgres
 */

CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

SELECT * FROM todo;

INSERT INTO todo(description) VALUES ('Create meet with Alirio');