package com.sunflower.service;

import com.sunflower.bean.User;

/**
 * Created by yanggavin on 14/12/22.
 */
public interface UserService {
    int add(User user);
    int update(User user);
    User getById(int id);
    int delete(int id);
}
