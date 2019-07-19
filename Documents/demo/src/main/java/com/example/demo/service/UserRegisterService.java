package com.example.demo.service;

import com.example.demo.entity.User;

import java.util.List;

public interface UserRegisterService {
    int register0(User user);
    List<User> findUser(String username);
}
