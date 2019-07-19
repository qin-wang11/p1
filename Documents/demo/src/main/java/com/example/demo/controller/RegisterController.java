package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
public class RegisterController {
    @Autowired
    RegisterService registerService;

    @RequestMapping(value = "/register", method = RequestMethod.GET)
    @ResponseBody
    public String register(User user) {
        System.out.println(user);
        List<User> users=null;
        users=registerService.findUser(user.getU_name());
        System.out.println(users);
        if(users.isEmpty()){
            int rows = registerService.register(user);
            if (rows > 0) {
                return "success";
            } else {
                return "fail";
            }
        }else {
            return "isexit";
        }
    }
}
