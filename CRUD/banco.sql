create database Estacionamento;
use Estacionamento;

create table Carros(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    placa VARCHAR(255),
    modelo VARCHAR(255),
    nome_cliente VARCHAR(255),
    email VARCHAR(255)
);


