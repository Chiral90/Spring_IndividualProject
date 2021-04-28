package org.fp.controller;

import javax.servlet.http.HttpSession;

import org.fp.domain.UserVO;
import org.fp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Controller
@Log4j
@RequestMapping("/admin/*")
//@AllArgsConstructor
public class AdminController {
	@Setter(onMethod_= @Autowired)
	private UserService service;
	
	//로그인 페이지로 화면 이동
	@GetMapping("/signin")
	public void signIn() {
		
	}
	
	@PostMapping("/signin")
	public String login(UserVO user, HttpSession session) {
		log.info("admin login....");
		//user의 데이터와 일치하는 db상의 데이터 검색해서 vo에 저장
		UserVO vo = service.login(user);
		log.info("vo : " + vo);
		//user의 데이터를 세션 영역의 admin 변수에 저장
		session.setAttribute("user", vo);
		if(session.getAttribute("user") != null) {
			log.info("로그인 성공");
			return "redirect:/admin/monitoring";
		} else {
			return "redirect:/admin/signin";
		}
		
	}
	
	@PostMapping("/logout")
	public void logout(HttpSession session) {
		log.info("admin logout....");
		session.removeAttribute("admin");
		//session.invalidate();
	}
	
	//모니터링 페이지로 화면 이동
	@GetMapping("/monitoring")
	public void monitoring() {
		
	}
	
}
