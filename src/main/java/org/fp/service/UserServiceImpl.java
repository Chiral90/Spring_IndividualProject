package org.fp.service;

import java.util.Map;

import org.fp.domain.UserVO;
import org.fp.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@Log4j
@Service
public class UserServiceImpl implements UserService {
	
	@Setter(onMethod_ = @Autowired)
	private UserMapper mapper;
	
	@Transactional // 유저 등록과 동시에 사업자 번호의 테이블이 생성
	public void registerUser(UserVO user, String sql) {
		log.info("create user table....");
		mapper.createUserTable(sql);
		log.info("register new user...." + user);
		mapper.registerUser(user);
	}
}
