package com.example.demo.service.impl;



import com.example.demo.entity.UserDTO;
import com.example.demo.mapper.UserDTOMapper;
import com.example.demo.service.UserDTOService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDTOServiceImpl implements UserDTOService {
    @Autowired
    private UserDTOMapper testDTOMapper;

    @Override
    public List<UserDTO> getUser(UserDTO userDTO) {
        List<UserDTO> list = testDTOMapper.getUser();
        for (UserDTO user : list) {
            if (userDTO.getUsername().equals(user.getUsername()) && userDTO.getPassword().equals(user.getPassword())) {
                return list;
            } else {

            }
        }
        return null;
    }

}
