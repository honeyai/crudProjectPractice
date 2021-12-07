package com.example.demo.Book.database.services;

import com.example.demo.Book.database.model.Book;
import com.example.demo.Book.database.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.*;
import java.util.List;


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

    @Autowired
    private EntityManager em;

    @Override
    public List<Book> listBookByGenre(String genre) {
        //under the hood stuff
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Book> cq= cb.createQuery(Book.class);
        //selecting the model thus giving access to all parameters
        Root<Book> book = cq.from(Book.class);
        //boolean that filters out by column given: genre
        Predicate genrePredicate = cb.equal(book.get("genre"), genre);
        //creates the statement: SELECT * FROM bookstore.book WHERE genre = "fiction";
        cq.select(book);
        cq.where(genrePredicate);

        TypedQuery<Book> query = em.createQuery(cq);

        return query.getResultList();
        }

    @Override
    //List by greater rating
    public List<Book> listBookGtRating(Double rating) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Book> cq= cb.createQuery(Book.class);
        Root<Book> book = cq.from(Book.class);
        Predicate ratingPredicate = cb.greaterThan(book.get("rating"), rating);
        cq.select(book);
        cq.where(ratingPredicate);

        TypedQuery<Book> query = em.createQuery(cq);

        return query.getResultList();
    }

}
