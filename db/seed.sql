-- create table commands
create table houses (
    id serial primary key,
    name varchar(50),
    address varchar(50),
    city varchar(50),
    state varchar(50),
    zipcode varchar(50)
)



-- Alter table commands
alter table houses
add img varchar(200),
add mortgage int,
add rent int
