CREATE DATABASE icecreamlist;

CREATE TABLE employees(
    id INT(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR (200) NOT NULL,
    apellido VARCHAR (200) NOT NULL,
    pedido TEXT NOT NULL,
    fecha CURRENT_TIMESTAMP,
    tiempo_duracion TIME
);

DESCRIBE employees;