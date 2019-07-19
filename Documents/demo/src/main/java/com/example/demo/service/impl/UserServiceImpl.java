package com.example.demo.service.impl;


import com.example.demo.entity.User;
import com.example.demo.entity.UserDTO;
import com.example.demo.mapper.UserMapper;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper testMapper;

    @Override
    public List<User> getUser() {

        return testMapper.getUser();

    }

    @Override
    public User findUser(String username, String password) {
        return testMapper.checkUser(username,password);
    }

    @Override
    public User searchuser(int u_id) {
        return testMapper.searchuser(u_id);
    }

    @Override
    public User deleteuser(int u_id) {
        return testMapper.deleteuser(u_id);
    }
}
