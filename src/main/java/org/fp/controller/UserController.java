package org.fp.controller;

import java.util.Objects;

import javax.servlet.http.HttpSession;

import org.fp.domain.BoardVO;
import org.fp.domain.UserVO;
import org.fp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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
	public void signIn() {
		
	}
	
	@PostMapping("/signin")
	public String login(UserVO user, HttpSession session) {
		log.info("user login....");
		//user의 데이터와 일치하는 db상의 데이터 검색해서 vo에 저장
		UserVO vo = service.login(user);
		log.info("vo : " + vo + " @Controller");
		//user의 데이터를 세션 영역의 user 변수에 저장
		session.setAttribute("user", vo);
		if (vo.getBizNo().equals("admin")) vo.setAdmin(true);
		
		if(session.getAttribute("user") != null) {
			log.info("로그인 성공");
			return "redirect:/user/measure";
		} else {
			return "redirect:/user/signin";
		}
		
	}
	
	@PostMapping("/signout")
	public String logout(HttpSession session) {
		log.info("user signout....");
		session.removeAttribute("user");
		//session.invalidate();
		return "redirect:/user/signin";
	}
	
	//체온 측정 페이지로 화면 이동
	@GetMapping("/measure")
	public String measure(HttpSession session) {
		if (session.getAttribute("user") != null) {
			return "/user/measure";
		} else {
			return "redirect:/user/signin";
		}
		
	}
	
	//체온 측정값 제출, db insert
	@PostMapping("/insertData")
	public String insertData(BoardVO board) {
				
		service.insertData(board);
		
		log.info("insert : " + board + "@Controller");
		//rttr.addFlashAttribute("result", board.getNo());
		
		return "redirect:/user/measure";
	}
	
	//회원 가입 페이지로 화면 이동
	@GetMapping("/register")
	public void resgister() {
		
	}
		
	//회원 가입 제출, db insert
	@PostMapping("/register")
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
	public String board(Model model, HttpSession session) {
		//log.info(session.getAttribute("user"));
		if (session.getAttribute("user") != null) {
			UserVO user = (UserVO) session.getAttribute("user");
			model.addAttribute("list", service.boardList(user));
			return "/user/board";
		} else {
			return "redirect:/user/signin";
		}
	}
	

	//모니터링 페이지로 화면 이동
	@GetMapping("/monitoring")
	public String monitoring(HttpSession session) {
		
		UserVO vo = (UserVO) session.getAttribute("user");
		if (vo.isAdmin()) {
			return "/user/monitoring";
		} else {return "redirect:/user/signin";}
		
		
	}

}