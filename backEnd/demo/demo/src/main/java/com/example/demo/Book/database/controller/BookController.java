package com.example.demo.Book.database.controller;

import com.example.demo.Book.database.services.BookService;
import com.example.demo.Book.database.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(path = "/b")
public class BookController {

    @Autowired
    private final BookService bookService;

    @Autowired //means this object will be magically initialized
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/listAll")
    public Iterable<Book> listBooks() {
        return bookService.listBooks();
    }

    @GetMapping("/listAll/bestSellers/{genre}")
    public Iterable<Book> listGenreBestSellers(@PathVariable String genre) { return bookService.listAllBestSellersInGenre(genre); }

    @GetMapping("/listAll/bestSellers")
    public Iterable<Book> listBestSellers() { return bookService.listAllBestSellers(); }

    @GetMapping("/listAll/{rating}")
    public Iterable<Book> listBookGtRating(@PathVariable("rating") Double rating) { return bookService.listBookGtRating(rating); }
//    @PostMapping("/add")
//    public Book createBook(@RequestBody Book newBook) {
//        return bookService.createBook(newBook);
//    }

}
