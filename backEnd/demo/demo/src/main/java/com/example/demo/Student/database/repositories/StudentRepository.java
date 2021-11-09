package com.example.demo.Student.database.repositories;
import com.example.demo.Student.database.model.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student, Long> {
}




