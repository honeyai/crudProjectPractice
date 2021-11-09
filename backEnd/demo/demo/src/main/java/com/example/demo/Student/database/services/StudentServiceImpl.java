package com.example.demo.Student.database.services;

import com.example.demo.Student.database.repositories.StudentRepository;
import com.example.demo.Student.database.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;


@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Iterable<Student> listStudents() {
        return null;
    }

    @Override
    public Student createStudent(Student newStudent) {
        return studentRepository.save(newStudent);
    }

    @Override
    public HttpStatus deleteStudent(Long studentId) {
        studentRepository.deleteById(studentId);
        return HttpStatus.OK;
    }
}
