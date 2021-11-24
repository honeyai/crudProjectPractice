package com.example.demo.Book.database.services;

import com.example.demo.Book.database.model.Book;
import com.example.demo.Book.database.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Iterable<Book> listBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book createBook(Book newBook) {
        return bookRepository.save(newBook);
    }

    @Override
    public HttpStatus deleteBook(Long id) {
        bookRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
