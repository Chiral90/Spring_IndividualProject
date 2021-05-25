package org.fp.service;

import java.util.List;
import java.util.Map;

import org.fp.domain.BoardVO;
import org.fp.domain.QnaVO;
import org.fp.domain.UserVO;

public interface UserService {
	public void registerUser(UserVO user, String sql); //유저 정보 등록
	public void register(UserVO user);
	public int bizNoChk(String bizNo);
	public int insertData(BoardVO board); //방문객 데이터 입력
	public UserVO login(UserVO user);
	public List<BoardVO> boardList(BoardVO vo); //오늘 방문 리스트
	//public List<BoardVO> specificDate(BoardVO vo); //특정일 방문 리스트
	public List<BoardVO> monitorList();
	public List<UserVO> userList();
	public void updateStatus(Map map);
	public List<BoardVO> dailyList(BoardVO vo);
	public List<UserVO> searchUser(String keyword);
	public List<QnaVO> qnaList(String bizNo);
}
