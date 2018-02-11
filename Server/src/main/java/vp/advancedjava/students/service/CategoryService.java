package vp.advancedjava.students.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import vp.advancedjava.students.model.Category;
import vp.advancedjava.students.repository.CategoryRepository;

@Component
public class CategoryService {

	
	
	@Autowired
	CategoryRepository kategorijeRepository;
	
	
	
	public List<Category> findAll() {
		return kategorijeRepository.findAll();
	}
	
	public Category findOne(Long id) {
		return kategorijeRepository.findOne(id);
	}
}
