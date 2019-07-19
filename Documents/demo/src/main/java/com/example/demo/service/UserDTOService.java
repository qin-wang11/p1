package com.example.demo.service;

import com.example.demo.entity.UserDTO;

import java.util.List;

public interface UserDTOService {
    List<UserDTO> getUser(UserDTO userDTO);
}