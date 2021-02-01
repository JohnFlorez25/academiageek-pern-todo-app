/*
 Principal commands with PostgreSQL:
 - \l => list all database in postgresql
 - \c => move inside a database -> \c [data_base_name]
 - \dt => show table in database
 
 Access to the postgreSQL manager in terminal
 - psql -U postgres
 */

CREATE DATABASE authtodo;

CREATE TABLE users(
    user_id uuid DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
);

CREATE TABLE todo(
    todo_id SERIAL,
    user_id UUID,
    description VARCHAR(255),
    description VARCHAR(255) NOT NULL,
    PRIMARY KEY (todo_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

SELECT * FROM todo;

INSER INTO users (user_name, user_email, user_password) VALUES ('henry', 'henry123@gmail.com', 'kthl8822');

INSERT INTO todo(description) VALUES ('Create meet with Alirio');