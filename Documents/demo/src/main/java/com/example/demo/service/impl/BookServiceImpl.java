package com.example.demo.service.impl;

import com.example.demo.entity.Book;
import com.example.demo.mapper.BookMapper;
import com.example.demo.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookMapper bookMapper;

    @Override
    public List<Book> getBooks() {
        return bookMapper.getBooks();

    }
    @Override
    public List<Book> findBook(String value) {
        return bookMapper.findBook(value);
    }
}