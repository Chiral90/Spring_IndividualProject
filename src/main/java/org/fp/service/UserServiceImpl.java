package org.fp.service;

import java.util.List;
import java.util.Map;

import org.fp.domain.BoardVO;
import org.fp.domain.Criteria;
import org.fp.domain.QnaVO;
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
	
	@Transactional // 유저 등록과 동시에 사업자 번호의 테이블이 생성 - 현재 미사용
	public void registerUser(UserVO user, String sql) {
		log.info("create user table....");
		mapper.createUserTable(sql);
		log.info("register new user...." + user);
		mapper.registerUser(user);
	}
	
	public void register(UserVO user) {
		log.info("register new user...." + user);
		mapper.registerUser(user);
	}
	
	public int bizNoChk(String bizNo) { // return boolean이면 없을 때 에러 발생-입력한 사업자 번호가 db에 존재하면 return false
		log.info("bizNo Check...." + bizNo);
		int result = mapper.bizNoChk(bizNo);
		return result;
	}
	
	public int insertData(BoardVO board) {
		log.info("insert customer data...." + board);
		int result = mapper.insertData(board);
		return result;
	}
	
	public UserVO login(UserVO user) {
		log.info("login...." + user);
		return mapper.login(user);
	}
	
	public List<BoardVO> boardList(BoardVO vo) {
		log.info("board list...." + vo.getBizNo());
		return mapper.boardList(vo);
	}
	/*
	public List<BoardVO> specificDate(BoardVO vo) {
		log.info("specific date list..." + vo.getBizNo() + " at " + vo.getRegdate());
		return mapper.specificDate(vo);
	}
	*/
	public List<BoardVO> monitorList() {
		log.info("monitor list....");
		return mapper.monitorList();
	}
	
	public List<UserVO> userList() {
		return mapper.userList();
	}
	
	public void updateStatus(Map map) {
		mapper.updateStatus(map);
	}
	
	public List<BoardVO> dailyList(BoardVO vo) {
		return mapper.dailyList(vo);
	}
	
	public List<UserVO> searchUser(String keyword) {
		return mapper.searchUser(keyword);
	}
	
	public List<QnaVO> qnaList(Criteria cri) {
		return mapper.qnaList(cri);
	}
	
	public int totalCnt() {
		return mapper.totalCnt();
	}
	
	public int qnaRegister(QnaVO vo) {
		return mapper.qnaRegister(vo);
	}
	
	public QnaVO qnaDetail(int qno) {
		return mapper.qnaDetail(qno);
	}
	
	public int qnaUpdate(QnaVO vo) {
		return mapper.qnaUpdate(vo);
	}
	
	public int qnaDelete(QnaVO vo) {
		return mapper.qnaDelete(vo);
	}
}
