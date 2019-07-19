package com.example.demo.service;

import com.example.demo.entity.Book;
import java.util.List;

public interface BookService {
    List<Book> getBooks();
    List<Book> findBook(String value);
}
