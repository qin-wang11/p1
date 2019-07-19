package com.example.demo.controller;

import com.example.demo.entity.Book;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class BookController {
    @Autowired
    BookService bookService;

    @RequestMapping(value="/getBooks",method= RequestMethod.GET)
    @ResponseBody
    public List<Book> getBooks(){
        System.out.println(bookService.getBooks());
        return bookService.getBooks();
    }

    @RequestMapping(value="/findBook",method= RequestMethod.GET)
    @ResponseBody
    public List<Book> findBook(String value) {
        System.out.println(bookService.findBook(value));
        return bookService.findBook(value);
    }
}
