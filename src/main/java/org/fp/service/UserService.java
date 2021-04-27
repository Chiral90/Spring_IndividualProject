package org.fp.service;

import java.util.Map;

import org.fp.domain.UserVO;

public interface UserService {
	public void registerUser(UserVO user, String sql);

}
