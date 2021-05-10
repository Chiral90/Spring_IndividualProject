package org.fp.mapper;

import java.util.List;

import org.fp.domain.BoardVO;
import org.fp.domain.UserVO;

public interface UserMapper {
	
	public void createUserTable(String sql);	// 정보 등록 성공 시 {u사업자번호}로 테이블이 생성
	public void registerUser(UserVO user);		// 정보 등록
	public int bizNoChk(String bizNo);		// 사업자 번호 중복 체크
	public void insertData(BoardVO board);
	public UserVO login(UserVO user);
	public List<BoardVO> boardList(UserVO user);
	public List<BoardVO> monitorList();

}
