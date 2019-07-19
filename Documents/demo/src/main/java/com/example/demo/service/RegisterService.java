package com.example.demo.service;

import com.example.demo.entity.User;

import java.util.List;

public interface RegisterService {
    int register(User user);
    List<User> findUser(String username);
}
