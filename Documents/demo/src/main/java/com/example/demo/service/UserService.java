package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.entity.UserDTO;

import java.util.List;




public interface UserService {
    List<User> getUser();
    User findUser(String username,String password);
    User searchuser(int u_id);
    User deleteuser(int u_id);
}
