package org.fp.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import javax.servlet.http.HttpSession;

import org.fp.domain.BoardVO;
import org.fp.domain.Criteria;
import org.fp.domain.PageDTO;
import org.fp.domain.QnaVO;
import org.fp.domain.UserVO;
import org.fp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

//@RestController
@Controller
@Log4j
@RequestMapping("/user/*")
//@AllArgsConstructor
public class UserController {
	
	@Setter(onMethod_ = @Autowired)
	private UserService service;
	
	//로그인 페이지로 화면 이동
	@GetMapping("/login")
	public String signIn(HttpSession session) { //세션에 정보 있을 때
		if (Objects.nonNull(session.getAttribute("user"))) {
			log.info("이미 접속 중입니다.");
			return "redirect:/user/measure";
		} else {
			
			return "redirect:/user/signin";
		}
	}
	
	@GetMapping("/signin")
	public void signIn() { //세션에 정보 없을 때
		log.info("새로운 사용자");
	}
	
	@PostMapping("/signin")
	public String login(UserVO user, HttpSession session) {
		log.info("user login....");
		//user의 데이터와 일치하는 db상의 데이터 검색해서 vo에 저장
			UserVO vo = service.login(user);
			log.info("vo : " + vo + " @Controller");
			//user의 데이터를 세션 영역의 user 변수에 저장
			log.info("null 여부 : " + Objects.nonNull(vo));
			if (Objects.nonNull(vo)) { //db에 해당 정보의 유저가 있으면
				log.info("세션 변수에 저장");
				if (vo.getBizNo().equals("admin")) { // 관리자 계정이면
					vo.setAdmin(true);
					session.setAttribute("user", vo); // 세션 변수 user에 vo를 저장
					log.info("관리자 로그인 성공");
					log.info("vo : " + vo + " @Controller");
					return "redirect:/user/monitoring"; // 모니터링 페이지로 이동
				}
				session.setAttribute("user", vo); // 세션 변수 user에 vo를 저장
				log.info("일반 유저 로그인"); // 관리자 계정이 아니면
				log.info("세션 변수 정보 : " + session.getAttribute("user"));
				return "redirect:/user/measure"; // 측정 페이지로 이동
			} else {
				log.info("로그인 실패");
				session.invalidate();
				return "/user/signin";
			}		
	}
	
	//로그아웃
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
		if (Objects.nonNull(session.getAttribute("user"))) { //세션에 로그인 정보 있을 때
			return "/user/measure";
		} else {  //세션에 로그인 정보 없을 때
			session.invalidate();
			return "redirect:/user/signin";
		}
		
	}
	
	//체온 측정값 제출, db insert
	@ResponseBody
	@PostMapping("/insertData")
	public String insertData(BoardVO board) {
				
		int result = service.insertData(board); // measureAction의 ajax로 조건에 따른 return을 위해 insert 결과로 int를 return
		if (result == 1) {
			log.info("insert : " + board + "@Controller");
			return "success";
		} else {return "fail";}
	}
	
	//회원 가입 페이지로 화면 이동
	@GetMapping("/register")
	public void resgister(HttpSession session) {
		//session.invalidate(); //회원가입 페이지로 이동하면 세션 클리어
		session.removeAttribute("user");
	}
		
	//회원 가입 제출, db insert
	@PostMapping("/register")
	//public String insertUser(UserVO user, RedirectAttributes rttr) {
	public String insertUser(UserVO user) {
		//String sql = "create table u" + user.getBizNo() + " (bno bigint primary key auto_increment, "; // 테이블 생성용 sql. 댓글형식으로 할거면 필요 없음
		//sql += "name varchar(20), addr varchar(100), phoneNo varchar(12), regdate date, updateDate date)";
		//service.registerUser(user, sql);
		
		service.register(user);
		
		log.info("insert : " + user + "@Controller");
		
		return "redirect:/user/measure";
	}
	
	//중복 검사
	@ResponseBody
	@PostMapping("/existChk")
	public String existChk(String bizNo) {
		//log.info("check existing bizNo for : " + bizNo);
		int result = service.bizNoChk(bizNo);
		if (result == 0) {
			return "success";
		} else return "fail";
	}

/*	
	//방문 기록 페이지로 화면 이동
	@GetMapping("/board")
	public String board(String regdate, Model model, HttpSession session) {
		//log.info(session.getAttribute("user"));
		if (Objects.nonNull(session.getAttribute("user"))) {
			UserVO user = (UserVO) session.getAttribute("user");
			BoardVO vo = new BoardVO();
			regdate = "%" + regdate + "%";
			vo.setBizNo(user.getBizNo());
			vo.setRegdate(regdate);
			model.addAttribute("list", service.boardList(vo));
			return "/user/board";
		} else {
			session.invalidate();
			return "redirect:/user/signin";
		}
	}
*/
	//모니터링 페이지로 화면 이동
	@GetMapping("/monitoring")
	public String monitoring(Model model, HttpSession session) {
		
		UserVO vo = (UserVO) session.getAttribute("user");
		if (Objects.nonNull(session.getAttribute("user")) && vo.isAdmin()) {
			model.addAttribute("list", service.monitorList());
			return "/user/monitoring";
		} else {
			session.invalidate();
			return "redirect:/user/signin";
		}
	}
	
	@PostMapping("/measureAction")
	public void measureAction() {
		log.info("Measure Action");
	}

	@GetMapping("/userList")
	public void userList(Model model, HttpSession session) {
		log.info("user list at new window");
		
		UserVO vo = (UserVO) session.getAttribute("user");
		if (Objects.nonNull(session.getAttribute("user")) && vo.isAdmin()) {
			model.addAttribute("list", service.userList());
		} else {
			session.invalidate();
		}
	}
	
	//userList 화면에서 ajax로 교환하고, table div만 refresh 하는 것도 괜찮을듯? -> model을 새로 받아올 수 있나? 이전에 model의 문제가 있었음 (ajax로 새로 받아오지 못했는데, refresh후 callback함수로 /user/searchUser 실행하면 가능한가?
	@GetMapping("/searchUser")
	public String searchUser(@RequestParam("keyword") String keyword, Model model) {
		keyword = "%" + keyword + "%";
		log.info("search user by " + keyword);
		model.addAttribute("list", service.searchUser(keyword));
		return "user/userList";
	}
	/*
	@GetMapping("/userList")
	public void userList(@RequestParam("keyword") String keyword, Model model) {
		keyword = "%" + keyword + "%";
		log.info("search user by keyword : "+ keyword);
		model.addAttribute("list", service.searchUser(keyword));
	}
	*/
	/*
	@GetMapping("/userList")
	public void userList(@RequestParam("keyword") String keyword, Model model) {
		log.info("original keyword : " + keyword);
		log.info("isNull : " + Objects.isNull(keyword));
		if (keyword.equals("") || Objects.isNull(keyword) || keyword == null) {
			log.info("user list at new window");
			model.addAttribute("list", service.userList());
		} else {
			keyword = "%" + keyword + "%";
			log.info("search user by keyword : " + keyword);
			model.addAttribute("list", service.searchUser(keyword));
		}
	}
	*/
	@ResponseBody
	@PostMapping("/updateStatus")
	public void updateStatus(String bno, String status) {
		Map map = new HashMap();
		map.put("bno", bno);
		map.put("status", status);
		log.info("update status.... bno : " + bno + " status : " + status);
		service.updateStatus(map);
	}
	
	@GetMapping({"/dailyList", "/board"})
	public void dailyList(String bizNo, String regdate, Model model) {
		BoardVO vo = new BoardVO();
		
		regdate = "%" + regdate + "%";
		vo.setBizNo(bizNo);
		vo.setRegdate(regdate);
		log.info("board list");
		model.addAttribute("list", service.dailyList(vo));
		
	}
	
	@GetMapping({"/userQnaList", "/adminQnaList"})
	public void qnaList(Model model, Criteria cri) {
		log.info("qnaList");
		model.addAttribute("list", service.qnaList(cri));
		int total = service.totalCnt();
		model.addAttribute("pageMaker", new PageDTO(cri, total));
	}
	
	@GetMapping({"/userQnaRegister"})
	public void qnaInsert(HttpSession session) {
		if (Objects.nonNull(session.getAttribute("user"))) {
		}
	}
	
	@PostMapping({"/userQnaRegister"})
	public String qnaInsert(QnaVO vo, HttpSession session) {
		UserVO user = (UserVO) session.getAttribute("user");
		if (user.getBizNo().equals(vo.getBizNo())) {
			log.info("qnaRegister");
			int result = service.qnaRegister(vo);
			log.info("result : " + result);
		}
		return "redirect:/user/userQnaList";
	}
	
	@GetMapping({"/userQnaDetail"})
	public void qnaDetail(@RequestParam("qno") int qno, Model model) {
		log.info("qnaDetail");
		model.addAttribute("detail", service.qnaDetail(qno));
	}
	
	@GetMapping({"/userQnaUpdate"})
	public void qnaUpdate(@RequestParam("qno") int qno, Model model) {
		log.info("qnaUpdate page");
		model.addAttribute("detail", service.qnaDetail(qno));
	}
	@PostMapping({"/userQnaUpdate"})
	public String qnaUpdate(QnaVO vo) {
		log.info("qnaUpdate" + vo);
		int result = service.qnaUpdate(vo);
		int qno = vo.getQno();
		log.info("result : " + result);
		return "redirect:/user/userQnaDetail?qno="+qno;
	}
	@PostMapping({"/userQnaDelete"})
	public String qnaDelete(QnaVO vo, HttpSession session) {
		UserVO user = (UserVO) session.getAttribute("user");
		log.info("vo : " + vo.getBizNo());
		log.info("session : " + user.getBizNo());
		if (user.getBizNo().equals(vo.getBizNo())) {
			log.info("qnaDelete");
			int result = service.qnaDelete(vo);
			log.info("result : " + result);
		}
		
		return "redirect:/user/userQnaList";
	}
}