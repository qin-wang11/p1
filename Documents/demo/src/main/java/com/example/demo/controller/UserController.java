package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@Controller
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping(value="/getUsers",method= RequestMethod.GET)
    @ResponseBody
    public List<User> getUsers() {
        System.out.println(userService.getUser());
        return userService.getUser();
    }

    @RequestMapping(value="/login",method= RequestMethod.GET)
    @ResponseBody
    public User login( String username, String password){
        System.out.println(username + password);

        if(userService.findUser(username,password)== null){
            User user = new User();
            user.setU_id(-10);
            return user;
        }else{
            return userService.findUser(username,password);
        }
    }

    @RequestMapping(value="/searchuser",method= RequestMethod.GET)
    @ResponseBody
    public User searchuser(int u_id){
        System.out.println(u_id);
        User user = new User();
        return user;

    }

//    @RequestMapping(value="/deleteuser",method= RequestMethod.GET)
//    @ResponseBody
//    public String deleteUser(User user,int u_id){
//            System.out.println(user);
//
//                int rows = userService.deleteuser(u_id);
//                if (rows > 0) {
//                    return "success";
//                } else {
//                    return "fail";
//                }
//
//    }

}
