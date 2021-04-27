package org.fp.domain;

import java.util.Date;

import lombok.Data;

@Data
public class BoardVO {
	private int bno;
	private String name;
	private String addr;
	private String phoneNo;
	private Date regdate;
	private Date updateDate;
	//private String regdate;
	//private String updateDate;

}
