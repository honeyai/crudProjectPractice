package com.example.demo.Book.database.repositories;
import com.example.demo.Book.database.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {
}




