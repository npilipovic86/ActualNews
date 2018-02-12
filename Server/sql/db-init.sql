create database news;


insert into category 
	( name)
    values ( 'category 1');

insert into category 
	( name)
    values ( 'category 2');

insert into category 
	( name)
    values ( 'category 3');
insert into tiding
	(name,about,content,category_id)
    values ('name1','about1', 'content1', 1);

insert into tiding
	(name,about,content,category_id)
    values ('name2','about2', 'content2', 2);

-- insert users
-- password is 12345 (bcrypt encoded) 
insert into security_user (username, password, first_name, last_name, role) values 
	('admin', '$2a$04$4pqDFh9SxLAg/uSH59JCB.LwIS6QoAjM9qcE7H9e2drFuWhvTnDFi', 'Admin', 'Admin', 'ADMINISTRATOR');
-- password is abcdef (bcrypt encoded)-- password is abcdef (bcrypt encoded)
insert into security_user (username, password, first_name, last_name, role) values 
	('petar', '$2a$04$Yr3QD6lbcemnrRNLbUMLBez2oEK15pdacIgfkvymQ9oMhqsEE56EK', 'Petar', 'Petrovic', 'WORKER');
