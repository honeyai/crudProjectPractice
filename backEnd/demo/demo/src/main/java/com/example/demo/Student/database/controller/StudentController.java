package com.example.demo.Student.database.controller;

import com.example.demo.Student.database.model.Student;
import com.example.demo.Student.database.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Stream;

@RestController
@CrossOrigin
@RequestMapping(path = "/student")
public class StudentController {

    @Autowired
    private final StudentService studentService;

    @Autowired //means this object will be magically initialized
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/list")
    public Iterable<Student> listStudents() {
        return studentService.listStudents();
    }

    @PostMapping("/newStudent")
    public  Student createStudent(@RequestBody Student newStudent) {
        return studentService.createStudent(newStudent);
    }
}
