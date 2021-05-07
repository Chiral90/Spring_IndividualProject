create database ip;
use ip;
create table [6429200357]
([1col] int, [2col] int, [3col] int, [4col] int, [5col] int, [6col] int,
[7col] int, [8col] int, [9col] int, [10col] int) (
	bno long primary key auto_increment,
    name varchar(20),
    addr varchar(100),
    phoneNo varchar(12),
    regdate date,
    updateDate date
);

create table u6429200357 (
	bno long primary key auto_increment,
    name varchar(20),
    addr varchar(100),
    phoneNo varchar(12),
    regdate date,
    updateDate date
);

create table user (
	bizNo varchar(10) primary key, -- not null,
    corpName varchar(20), -- not null,
    pw varchar(20),
    lati varchar(20),
    longi varchar(20),
    phoneNo varchar(12),
    sectors varchar(10)
);
drop table user;
desc user;

select * from user;
insert into user (bizNo, pw) values ('admin', '1234');

create table united_board (
	bizNo varchar(10),
	bno bigint primary key auto_increment,
    name varchar(20),
    addr varchar(100),
    phoneNo varchar(12),
    temp varchar(5),
    regdate date,
    updateDate date
);
alter table united_board add constraint fk_united_board foreign key (bizNo) references user (bizNo);
alter table united_board drop foreign key fk_united_board;
select * from user where bizNo = 'admin' and pw = '1111';
desc united_board;
select DATE_FORMAT(now(), '%Y-%m-%d %H:%i:%s');
select * from united_board;
select * from united_board where bizNo = 6429200357 and regdate = curdate();

select b.*, u.* from united_board b, user u where b.bizNo = u.bizNo;

set sql_safe_updates = 0;
delete from user where bizNo='6429200358';
delete from united_board where bizNo='0';
drop table u6429200358;
alter table user change phoneNo corpPhoneNo varchar(12);
alter table united_board modify temp varchar(5) not null;
select * from united_board;
select u.corpName, u.corpPhoneNo, b.name, b.addr, b.phoneNo, b.regdate
from user u, united_board b 
where u.bizNo = b.bizNo and (b.temp < 35.5 or b.temp > 37.5) and b.regdate = curdate();
alter table united_board modify regdate datetime;
alter table united_board modify updateDate datetime;
select * from user;
insert into united_board values
('0000000000', 29, 'anonymous', 'Ulsan', '01034567890', 36.5, DATE_FORMAT(now(), '%Y-%m-%d %H:%i:%s'), null);