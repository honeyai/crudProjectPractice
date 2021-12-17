package com.example.demo.Book.database.services;
import com.example.demo.Book.database.model.Book;
import org.springframework.http.HttpStatus;

public interface BookService {
    Iterable<Book> listBooks();
    Book createBook(Book newBook);
    HttpStatus deleteBook(Long id);
    Iterable<Book> listBookByGenre(String genre);
    Iterable<Book> listBookGtRating(Double rating);
    Iterable<Book> listAllBestSellersInGenre(String genre);
    Iterable<Book> listAllBestSellers();
}
