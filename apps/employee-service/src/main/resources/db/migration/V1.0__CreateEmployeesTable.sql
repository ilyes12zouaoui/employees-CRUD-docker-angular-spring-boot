CREATE TABLE employees
(
   id INTEGER,
   name VARCHAR (150) NOT NULL,
   email VARCHAR (150) NOT NULL UNIQUE,
   gender VARCHAR (10) NOT NULL,
   age INTEGER,
   does_sport BOOLEAN,
   created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
   modified_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
   CONSTRAINT pk_employees PRIMARY KEY (id)
);

CREATE SEQUENCE employees_id_sequence START 1 INCREMENT 1 OWNED BY employees.id;