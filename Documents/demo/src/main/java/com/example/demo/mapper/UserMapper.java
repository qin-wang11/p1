package com.example.demo.mapper;

import com.example.demo.entity.User;
import com.example.demo.entity.UserDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface UserMapper {
    List<User> getUser();
    User checkUser(@Param("username") String username,@Param("password") String password);
    User searchuser(@Param("u_id") int u_id);
    User deleteuser(@Param("u_id") int u_id);
}

