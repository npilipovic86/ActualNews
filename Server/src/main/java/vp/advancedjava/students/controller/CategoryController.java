package vp.advancedjava.students.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import vp.advancedjava.students.model.Category;
import vp.advancedjava.students.service.CategoryService;

@RestController
public class CategoryController {
	
	@Autowired
	CategoryService kategorijaService;
	
	
    @GetMapping(value = "api/categories")
    public ResponseEntity<List<Category>> get() {
        final List<Category> kategorije = kategorijaService.findAll();
        return new ResponseEntity<>(kategorije,HttpStatus.OK);
    }

}
