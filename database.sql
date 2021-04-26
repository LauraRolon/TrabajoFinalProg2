create schema parcialentrega1;
use parcialentrega1;
create table usuarios (
id int unsigned primary key auto_increment,
email varchar(50) not null unique,
nombre varchar(50) not null,
apellido varchar (50) not null,
Edad int unsigned not null,
Contraseña varchar(50) not null,
password varchar (50) not null
);
create table productos (
id int unsigned primary key auto_increment,
marca varchar(50) not null,
modelo varchar (50) not null,
sistemaOperativo varchar(50) not null,
memoria varchar(50) not null,
foto varchar (250) not null,
descripción varchar(250) not null,
precio varchar (200) not null,
usuarios_id int not null,
foreign key (usuarios_id) references usuarios (id)
);
create table comentarios(
Id INT unsigned primary key auto_increment,
texto varchar (50) not null,
fecha varchar (50) not null,
foreign key (usuarios_id) references usuarios (id),
foreign key (productos_id) references productos (id)
);




insert into usuarios values (default,"u1","juanmartinez@gmail.com","Juan Martinez",26,"adf12344");
insert into usuarios values (default,"u2","Jorgecasares@gmail.com","Jorge cazares ",29,"casa123");
insert into usuarios values (default,"u3","nataliapuentes@gmail.com","Natalia puentes",18,"87555");
insert into usuarios values (default,"u4","pablouribe@gmail.com","Pablo Uribe",47,"35139");
insert into usuarios values (default,"u5","lauradiaz@gmail.com","Laura Diaz",30,"caminos12");

insert into productos values (default,"1","MAC","MacBook Air","2020","2TB","/images/computadoras/McBookAir.jpg","Macbook Air 13 Apple M1 Chip 8gb 256 Ssd 13.3 2560 X 1600","$148.116");
insert into productos values (default,"2","Lenovo","2DCF 480 SSD","Windows 10","480GB","/images/computadoras/lenovo2DCF480SSD.jpg","Notebook Lenovo 2DCF 480 SSD 15.6 - AMD Ryzen 5 16 GB DDR4","$115.987");
insert into productos values (default,"3","Acer","Aspire 5 A515-55-576H sas Premium","Windows 10","512GB","/images/computadoras/acerAspire.jpg","Notebook Acer Aspire 5 A515-55-576H sas Premium 15.6","$150.957");
insert into productos values (default,"4","HP","6MZ85LT","Windows 10","1TB","/images/computadoras/HP6MZ85LT.JPG","Notebook HP 6MZ85LT 14 - AMD Ryzen 3 4 GB DDR4 1TB","$139.116");
insert into productos values (default,"5","HP","1l0v7lt","Windows 10","8GB","/images/computadoras/resize.jpg","Notebook Hp 250 G7 Intel Core i7-1065 8gb 1tb ","$164.176");
insert into productos values (default,"6","Intel","20RS002HAR","Windows 10 Pro 64 (Español)","8GB DDR4 2666MHz PC4-21328 SDRAM SODIMM","8GB DDR4 2666MHz PC4-21328 SDRAM SODIMM","/lenovo-thinkpad-14s-hero.jpg","ThinkBook 14s (14”, Intel)","$150.750");
insert into productos values (default,"7","Intel","82A100EFAR","Windows 10 Home 64 (Español)","8GB LPDDR4X 3200MHz","/lenovo-laptop-yoga-slim-7.jpg","Yoga Slim 7 (14, Intel)","$145.716");
insert into productos values (default,"8","Intel","Legion 5i 15 - Phantom Black","Windows 10 Home Single Language 64 (Español)","/lenovo-laptop-legion-5-15-intel.jpg","Lenovo Legion 5i (15.6, Intel)","$176.730");
insert into productos values (default,"9","Asus","E410ma","Linux","4GB","/asus.jpg","Notebook Asus E410ma N4020 4gb Ram 128gb Ssd 14 Pulg Win 10 Peacock Blue","$140.390");
insert into productos values (default,"10","Asus","Not00096","Linux","4GB","/ausrezize.jpg","Notebook Asus 15-X509FA Intel Core i3 15,6 Pulgadas","$179.100");

insert into comentarios values (default,"u1","La computadora es de excelente calidad, la recomiendo", "20/04/2021");
insert into comentarios values (default,"u2","Felíz con el producto. Llego en tiempo y forma.", "20/04/2021");
insert into comentarios values (default,"u3","Todo excelente. Se demoró mucho la entrega sin embargo.", "21/04/2021");
insert into comentarios values (default,"u4","Se puede pedir en otro color?", "23/04/2021");
insert into comentarios values (default,"u5","Hermosa computadora! La recomiendo, es excelente en calidad-precio.", "24/04/2021");
