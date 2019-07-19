package com.example.demo.service.impl;

import com.example.demo.entity.User;
import com.example.demo.mapper.UserRegisterMapper;
import com.example.demo.service.UserRegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserRegisterServiceImpl implements UserRegisterService {
    @Autowired
    private UserRegisterMapper userregisterMapper;

    @Override
    public int register0(User user) {
        return userregisterMapper.insertusers(user);
    }
    @Override
    public List<User> findUser(String username) {
        return userregisterMapper.checkUser(username);
    }

}
