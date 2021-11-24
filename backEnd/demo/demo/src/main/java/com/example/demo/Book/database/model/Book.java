package com.example.demo.Book.database.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name= "book")
public class Book {

    @Id
    @Column
    @SequenceGenerator(
            name= "student_sequence",
            sequenceName = "student_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_sequence"
           )
    private Long id;

    @Column
    private String title, author, genre;
    @Column
    private Double price, rating;

    public Book() {
    }

    public Book(String title, String author, String genre, Double price, Double rating) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.price = price;
        this.rating = rating;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getRating() { return rating; }

    public void setRating(Double rating)  { this.rating = rating; }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", title = " + title + '\'' +
                ", author = " + author + '\'' +
                ", genre = " + genre + '\'' +
                ", price = " + price + '\'' +
                ", rating = " + rating + '\'' +
                '}';
    }
}
