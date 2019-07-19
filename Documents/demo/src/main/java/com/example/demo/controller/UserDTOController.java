package com.example.demo.controller;

import com.example.demo.entity.UserDTO;
import com.example.demo.service.UserDTOService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserDTOController {

    @Autowired
    UserDTOService userDTOService;

//    @RequestMapping(value="/login",method= RequestMethod.POST)
//    @ResponseBody
//    public String login(@RequestBody UserDTO userDTO){
//
//        System.out.println(userDTO.getUsername());
//        if(userDTOService.getUser(userDTO) == null){
//            return "fail";
//        }
//        return "success";
//    }
}
