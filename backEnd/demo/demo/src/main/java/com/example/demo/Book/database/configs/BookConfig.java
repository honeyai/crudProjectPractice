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

//    @Bean
//    CommandLineRunner commandLineRunner(BookRepository bookRepository){
//        return args -> {
//            Book book1 = new Book(
//                    "The Giving Tree",
//                    "Shell Silverstein",
//                    "Fiction",
//                    12.50,
//                    5.0,
//                    "TheGivingTree"
//            );
//            Book book2 = new Book(
//                    "Moby Dick",
//                    "Herman Melville",
//                    "Fiction",
//                    15.50,
//                    4.0,
//                    "MobyDick"
//            );
//            Book book3 = new Book(
//                    "Lord of the Flies",
//                    "William Golding",
//                    "Fiction",
//                    14.75,
//                    4.5,
//                    "LordoftheFlies"
//            );
//            bookRepository.saveAll(Collections.unmodifiableList(Arrays.asList(book1, book2, book3)));
//        };
//    }
}
