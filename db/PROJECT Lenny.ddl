create database LENINBARBERSHOP;

use LENINBARBERSHOP;

create table PRENOTAZIONE (
     Data date not null,
     OraInizio time not null,
     OraFine time not null,
     Nome char(20) not null,
     Numero char(20) not null,
     Servizio char(20) not null,
     Lavaggio boolean
     );