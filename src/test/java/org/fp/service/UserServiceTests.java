package org.fp.service;

import java.util.HashMap;
import java.util.Map;

import org.fp.domain.UserVO;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
@Log4j
public class UserServiceTests {
	
	@Setter(onMethod_ = @Autowired)
	private UserService service;
	
	//@Test
	public void test() {
		log.info(service);
	}
	
	//@Test
	public void testCreate() {
		log.info("Create Test....");
		UserVO user = new UserVO();
		user.setBizNo("6429200357");
		user.setCorpName("그린 컴퓨터 아트학원 울산");
		user.setLati("35.542091940137134");
		user.setLongi("129.33832713068725");
		user.setPhoneNo("01011112222");
		user.setPw("1234");
		user.setSectors("교육");
		String sql = "create table u" + user.getBizNo() + " (bno bigint primary key auto_increment, ";
				sql += "name varchar(20), addr varchar(100), phoneNo varchar(12), regdate date, updateDate date)";
		//Map<String, String> map = new HashMap<String, String>();
		//map.put("value", sql);
		
		service.registerUser(user, sql);
	}
	@Test
	public void testList() {
		log.info("Board List Test....");
		UserVO user = new UserVO();
		user.setBizNo("6429200357");
		
		log.info(service.boardList(user));
	}

}
