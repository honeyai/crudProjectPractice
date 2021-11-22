package com.example.demo.Book.database.repositories;
import com.example.demo.Book.database.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}




