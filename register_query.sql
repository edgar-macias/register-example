CREATE TABLE public.clientes (
    id serial primary key,
    name varchar(50) not null,
    last_name varchar(50)
);

CREATE TABLE public.contact_data(
    id serial primary key,
    clientes_id int REFERENCES clientes(id),
    email varchar(50) unique not null,
    phone_number varchar(10) not null
);

CREATE TABLE public.security(
    id serial primary key,
    clientes_id int REFERENCES clientes(id),
    password varchar(50) not null
);