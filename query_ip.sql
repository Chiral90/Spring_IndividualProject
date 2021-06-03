create database ip;
use ip;
desc user;
desc united_board;

create table user (
	bizNo varchar(10) primary key, -- not null,
    corpName varchar(20), -- not null,
    pw varchar(20),
    addr varchar(100),
    lati varchar(20),
    longi varchar(20),
    corpPhoneNo varchar(12),
    sectors varchar(12)
);
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
    updateDate date,
    status varchar(10)
);
alter table united_board ADD CONSTRAINT FK_bizNo FOREIGN KEY (bizNo) REFERENCES user (bizNo);
alter table united_board add status varchar(10);
select * from user where bizNo = 'admin' and pw = '1111';
desc united_board;
select DATE_FORMAT(now(), '%Y-%m-%d %H:%i:%s');
select * from united_board;
select * from united_board where bizNo = 6429200357 and regdate = curdate();

select b.*, u.* from united_board b, user u where b.bizNo = u.bizNo;

set sql_safe_updates = 0;
delete from user where bizNo='6429200358';
delete from united_board where bizNo='0';
alter table user change phoneNo corpPhoneNo varchar(12);
alter table united_board modify temp varchar(5) not null;
select * from united_board;
select u.corpName, u.corpPhoneNo, b.name, b.addr, b.phoneNo, b.regdate
from user u, united_board b 
where u.bizNo = b.bizNo and (b.temp < 35.5 or b.temp > 37.5) and b.regdate >= curdate() order by regdate desc;
alter table united_board modify regdate datetime;
alter table united_board modify updateDate datetime;
alter table united_board modify status varchar(10) default "신규";
select * from user;
insert into united_board
(bizNo, name, addr, phoneNo, temp, regdate)
values
('0000000000', 'anonymous', 'Ulsan', '01034567890', 39, DATE_FORMAT(now(), '%Y-%m-%d %H:%i:%s'));
select * from united_board where bizNo='0000000000' and
regdate >= curdate();
-- use mysql;
-- select * from general_log;
show variables where variable_name like '%log%';
drop table u0000000000;
select * from user;
update united_board set status = "완료", updateDate = now() where bno = "99";
select * from united_board;
select rn, name, addr, phoneNo, temp, regdate, updateDate, status from
(select @rownum:=@rownum+1 as rn, u.* from united_board u, (select @rownum:=0) as tmp where bizNo = "6429200357" and regdate like "%2021-05-17%") as t;
select * from united_board;
select * from user where bizNo like "%그린%" or corpName like "%그린%";
select * from user where (bizNo like "%%" or corpName like "%%") and bizNo not in("admin");
SELECT DATE_FORMAT(regdate,'%Y-%m-%d') daily, COUNT(*) cnt FROM united_board GROUP BY daily; -- 일자 별 발생 횟수
select json_object(DATE_FORMAT(regdate,'%Y-%m-%d') daily, COUNT(*) cnt) FROM united_board GROUP BY daily;
delete from user where bizNo='1232256487';

create table qna_board (
	qno int primary key auto_increment,
    bizNo varchar(10) not null,
    corpName varchar(20) not null,
    title varchar(50) not null,
    content varchar(1000) not null,
    regdate datetime,
    updatedate datetime
);
alter table qna_board add corpName varchar(20) not null;
desc qna_board;
alter table qna_board ADD CONSTRAINT FK_bizNo_qna FOREIGN KEY (bizNo) REFERENCES user (bizNo);
insert into qna_board (bizNo, title, content, regdate, corpName) values ('0000000000', 'title1', 'content1', DATE_FORMAT(now(), '%Y-%m-%d %H:%i:%s'), '집');
select * from qna_board;
update qna_board set title="title update", content="content update", updateDate=DATE_FORMAT(now(), '%Y-%m-%d %H:%i:%s') where qno = 1;
delete from qna_board where bizNo="0000000000" and qno=1;
insert into qna_board (bizNo, title, content, corpName) select bizNo, title, content, corpName from qna_board;

select rn, qno, bizNo, title, regdate, corpName
			from (
				select @rownum:=@rownum+1 as rn, q.qno, q.title, q.content, q.bizNo, q.regdate, q.updatedate, u.corpName
				from (select @rownum:=0) as tmp, qna_board q, user u where q.bizNo = u.bizNo order by qno desc
			) qnaList
			where rn > 0 and rn <= 10;
            
select rn, qno, bizNo, title, regdate, corpName
			from (
				select @rownum:=@rownum+1 as rn, qno, title, content, bizNo, regdate, updatedate, corpName
				from (select @rownum:=0) as tmp, qna_board order by qno desc
			) qnaList
			where rn > 0 and rn <= 10;