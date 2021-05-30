package org.fp.domain;

import lombok.Data;

@Data
public class UserVO {
	private String corpName;	// 상호명 (nickname)
	private String bizNo; 		// 사업자 번호 (id)
	private String pw;			// 패스워드 (pw)
	private String addr;		// 주소 (addr)
	private String lati; 		// 위도
	private String longi;		// 경도
	private String corpPhoneNo;		// 연락처
	private String sectors;		// 업종 구분
	private boolean admin;		// 관리자 여부
}
