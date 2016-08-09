package com.sunflower.dao;

import com.sunflower.bean.User;
import org.apache.ibatis.annotations.Delete;

/**
 * Created by yanggavin on 14/12/22.
 */
public interface UserDao {
    int add(User user);
    int update(User user);
    User getById(int id);
    @Delete("delete from user where id=#{id}")
    int delete(int id);
}
