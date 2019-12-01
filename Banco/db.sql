create database Ecoquest;

use Ecoquest;

create table User(
	ID int auto_increment primary key,
    Usuario varchar(20) not null,
    email varchar(60) not null,
    senha varchar(60) not null,
    nivel int default 0
    );
    
create table Quest(
	ID int auto_increment primary key,
	Texto varchar(280) not null,
    Dificuldade varchar(8) not null
    );