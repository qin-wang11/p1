package com.example.demo.service.impl;

import com.example.demo.entity.User;
import com.example.demo.mapper.RegisterMapper;
import com.example.demo.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class RegisterServiceImpl implements RegisterService {

    @Autowired
    private RegisterMapper registerMapper;

    @Override
    public int register(User user) {
        return registerMapper.insertusers(user);
    }
    @Override
    public List<User> findUser(String username) {
        return registerMapper.checkUser(username);
    }


}