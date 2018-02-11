package vp.advancedjava.students.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import vp.advancedjava.students.model.Category;
import vp.advancedjava.students.model.Tiding;
import vp.advancedjava.students.repository.TidingRepository;



@Component
public class TidingService {
	
	@Autowired
	TidingRepository vestRepository ;
	
	
	public List<Tiding> findAll() {
		return vestRepository.findAll();
	}
	
	public Page<Tiding> findAll(Pageable page) {
		return vestRepository.findAll(page);
	}

	public Tiding findOne(Long id) {
		return vestRepository.findOne(id);
	}
	public  Page<Tiding> findByNameContainsAndCategory(String name,Category category,Pageable page){
		return vestRepository.findByNameContainsAndCategory(name,category, page);	
	}

	public Tiding save(Tiding meniItem) {
		return vestRepository.save(meniItem);
	}

	public void remove(Long id) {
		vestRepository.delete(id);
	}

	public Page<Tiding> findByCategory(Category category, Pageable page) {
		return vestRepository.findByCategory(category,page);
	}

	public Page<Tiding> findByNameContains(String name, Pageable page) {
		// TODO Auto-generated method stub
		return vestRepository.findByNameContains(name,  page);
	}

}
