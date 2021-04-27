package org.fp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.log4j.Log4j;

@Controller
@Log4j
@RequestMapping("/admin/*")
//@AllArgsConstructor
public class AdminController {
	
	//로그인 페이지로 화면 이동
	@GetMapping("/login")
	public void login() {
		
	}
	
	//모니터링 페이지로 화면 이동
	@GetMapping("/monitoring")
	public void monitoring() {
		
	}
	
}
