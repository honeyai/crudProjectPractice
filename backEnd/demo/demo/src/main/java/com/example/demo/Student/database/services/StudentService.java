package com.example.demo.Student.database.services;
import com.example.demo.Student.database.model.Student;
import org.springframework.http.HttpStatus;

import java.util.stream.Stream;

public interface StudentService {
    Iterable<Student> listStudents();
    Student createStudent(Student newStudent);
    HttpStatus deleteStudent(Long studentId);
}