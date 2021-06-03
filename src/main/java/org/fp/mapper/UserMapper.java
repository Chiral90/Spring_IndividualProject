package org.fp.mapper;

import java.util.List;
import java.util.Map;

import org.fp.domain.BoardVO;
import org.fp.domain.Criteria;
import org.fp.domain.QnaVO;
import org.fp.domain.UserVO;

public interface UserMapper {
	
	public void createUserTable(String sql);	// 정보 등록 성공 시 {u사업자번호}로 테이블이 생성
	public void registerUser(UserVO user);		// 정보 등록
	public int bizNoChk(String bizNo);			// 사업자 번호 중복 체크
	public int insertData(BoardVO board);		// 방명록 등록
	public UserVO login(UserVO user);			// 로그인
	public List<BoardVO> boardList(BoardVO vo);	// 방명록 리스트
	//public List<BoardVO> specificDate(BoardVO vo);
	public List<BoardVO> monitorList();			// 모니터링 이상 체온 리스트
	public List<UserVO> userList();				// 등록 업체 전체 리스트
	public void updateStatus(Map map);			// 이상 체온 처리 현황
	public List<BoardVO> dailyList(BoardVO vo);	// 업체 별 기록
	public List<UserVO> searchUser(String keyword);	// 특정 유저 찾기
	public List<QnaVO> qnaList(Criteria cri);	//
	public int totalCnt();
	public int qnaRegister(QnaVO vo);
	public QnaVO qnaDetail(int qno);
	public int qnaUpdate(QnaVO vo);
	public int qnaDelete(QnaVO vo);
}
