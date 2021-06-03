package org.fp.domain;

import lombok.Data;

@Data
public class QnaVO {
	private int qno;
	private String bizNo;
	private String title;
	private String content;
	private String regdate;
	private String updateDate;
	private String corpName;
}
