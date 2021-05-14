package org.fp.controller;

import org.fp.domain.BoardVO;
import org.fp.domain.UserVO;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({
	"file:src/main/webapp/WEB-INF/spring/root-context.xml",
	"file:src/main/webapp/WEB-INF/spring/appServlet/servlet-context.xml"
})
@Log4j
public class UserControllerTests {
	
	@Setter(onMethod_ = @Autowired)
	private WebApplicationContext ctx;
	
	private MockMvc mockMvc;
	
	protected MockHttpSession session;
	
	@Before
	public void setup() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(ctx).build();
	}
	
	@After
	public void finish() {
		//session.clearAttributes();
	}
	
	@Test
	public void testSpecificDate() throws Exception {
		String regdate = "%2021-05-12%";
		session = new MockHttpSession();
		UserVO user = new UserVO();
		user.setBizNo("6429200357");
		session.setAttribute("user", user);
		log.info(
				mockMvc.perform(MockMvcRequestBuilders.post("/user/board")
						.param("regdate", regdate)
						.session(session))
				.andReturn().getModelAndView().getModelMap()
				);
		session.clearAttributes();
	}
	
	//@Test
	public void testBizNoChk() throws Exception {
		String exist = "admin";
		String notExist = "test";
		log.info("check bizNo....");
		log.info(
				mockMvc.perform(MockMvcRequestBuilders.post("/user/existChk")
						.param("bizNo", notExist))
				.andReturn().getModelAndView().getModelMap()
				);
	}
	
	//@Test
	public void testList() throws Exception {
		//session test
		session = new MockHttpSession();
		UserVO vo = new UserVO();
		vo.setBizNo("6429200357");
		vo.setPw("1234");
		session.setAttribute("user", vo);
		
		log.info(
				mockMvc.perform(MockMvcRequestBuilders.get("/user/board")
						.session(session))
				.andReturn().getModelAndView().getModelMap()
				);
		
		session.clearAttributes();
	}
	
	//@Test
	public void testSignin() throws Exception {
		
		UserVO user = new UserVO();
		user.setBizNo("6429200357");
		user.setPw("1234");
		
		log.info(
				mockMvc.perform(MockMvcRequestBuilders.post("/user/signin")
						.param("bizNo", user.getBizNo())
						.param("pw", user.getPw()))
				.andReturn().getModelAndView().getModelMap()
				);
		session.clearAttributes();
	}

}
