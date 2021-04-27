package org.fp.controller;

import org.fp.domain.UserVO;
import org.fp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Controller
@Log4j
@RequestMapping("/user/*")
//@AllArgsConstructor
public class UserController {
	
	@Setter(onMethod_ = @Autowired)
	private UserService service;
	
	//로그인 페이지로 화면 이동
	@GetMapping("/signin")
	public void signin() {
		
	}
	
	//체온 측정 페이지로 화면 이동
	@GetMapping("/measure")
	public void measure() {
		
	}
	
	//회원 가입 페이지로 화면 이동
	@GetMapping("/register")
	public void resgister() {
		
	}
	
	//회원 가입 제출, db insert
	@PostMapping("/insert")
	//public String insertUser(UserVO user, RedirectAttributes rttr) {
	public String insertUser(UserVO user) {
		String sql = "create table u" + user.getBizNo() + " (bno bigint primary key auto_increment, "; // 테이블 생성용 sql. 댓글형식으로 할거면 필요 없음
		sql += "name varchar(20), addr varchar(100), phoneNo varchar(12), regdate date, updateDate date)";
		
		service.registerUser(user, sql);
		
		log.info("insert : " + user + "@Controller");
		//rttr.addFlashAttribute("result", board.getNo());
		
		return "redirect:/user/measure";
	}
	
	// 방문 기록 조회 페이지로 화면 이동
	@GetMapping("/board")
	public void board(Model model) {
		
	}

}