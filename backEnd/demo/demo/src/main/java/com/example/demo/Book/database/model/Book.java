package com.example.demo.Book.database.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name= "book")
public class Book {

    @Id
    @Column
    @SequenceGenerator(
            name= "book_sequence",
            sequenceName = "book_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "book_sequence"
           )
    private Long id;

    @Column(name="title")
    private String title;

    @Column(name="author")
    private String author;

    @Column(name="genre")
    private String genre;

    @Column(name="image")
    private String image;

    @Column(name="price")
    private Double price;

    @Column(name="rating")
    private Double rating;

    public Book() {
    }

    public Book(String title, String author, String genre, Double price, Double rating, String image) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.price = price;
        this.rating = rating;
        this.image = image;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

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
