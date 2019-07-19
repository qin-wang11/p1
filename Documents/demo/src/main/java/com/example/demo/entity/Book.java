package com.example.demo.entity;

import java.sql.Date;
import java.sql.Timestamp;

public class Book {
    private int b_id;
    private String b_name;
    private String author;
    private String publish;
    private Date publishtime;
    private Date pushtime;
    private String booktype;
    private int borrowstate;
    private int count;

    @Override
    public String toString() {
        return "Book{" +
                "b_name='" + b_name + '\'' +
                ", author='" + author + '\'' +
                ", publish='" + publish + '\'' +
                ", publishtime=" + publishtime +
                ", pushtime='" + pushtime + '\'' +
                ", booktype='" + booktype + '\'' +
                ", borrowstate=" + borrowstate +
                '}';
    }

    public int getB_id() {
        return b_id;
    }

    public void setB_id(int b_id) {
        this.b_id = b_id;
    }

    public String getB_name() {
        return b_name;
    }

    public void setB_name(String b_name) {
        this.b_name = b_name;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublish() {
        return publish;
    }

    public void setPublish(String publish) {
        this.publish = publish;
    }

    public Date getPublishtime() {
        return publishtime;
    }

    public void setPublishtime(Date publishtime) {
        this.publishtime = publishtime;
    }

    public Date getPushtime() {
        return pushtime;
    }

    public void setPushtime(Date pushtime) {
        this.pushtime = pushtime;
    }

    public String getBooktype() {
        return booktype;
    }

    public void setBooktype(String booktype) {
        this.booktype = booktype;
    }

    public int getBorrowstate() {
        return borrowstate;
    }

    public void setBorrowstate(int borrowstate) {
        this.borrowstate = borrowstate;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
