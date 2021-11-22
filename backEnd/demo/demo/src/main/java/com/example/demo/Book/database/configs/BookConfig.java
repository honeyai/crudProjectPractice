package com.example.demo.Book.database.configs;

import com.example.demo.Book.database.model.Book;
import com.example.demo.Book.database.repositories.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.Collections;

@Configuration
public class BookConfig {

    @Bean
    CommandLineRunner commandLineRunner(BookRepository bookRepository){
        return args -> {
            Book book1 = new Book(
                    "The Giving Tree",
                    "Shell Silverstein",
                    "Fiction",
                    12.50
            );
            Book book2 = new Book(
                    "The Giving Tree",
                    "Shell Silverstein",
                    "Fiction",
                    12.50
            );

            bookRepository.saveAll(Collections.unmodifiableList(Arrays.asList(book1, book2)));
        };
    }
}
