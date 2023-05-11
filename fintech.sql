create TABLE clientes (
	id 		serial PRIMARY KEY,
	cpf 	VARCHAR ( 15 ) not null,
	nome 	VARCHAR ( 90 ) not null,
	telefone VARCHAR ( 30 ) not null
);

select * from clientes
select * from contas

drop table contas
create table contas(
	id	serial PRIMARY key,
	saldo decimal (9,2),
	status	varchar (1),
	cliente_id int not null,
	foreign key (cliente_id) references clientes(id)
);