package vp.advancedjava.students.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.advancedjava.students.model.Category;
import vp.advancedjava.students.model.Tiding;

@Component
public interface TidingRepository extends JpaRepository<Tiding, Long> {

	public Page<Tiding> findByNameContainsAndCategory(String name, Category category, Pageable page);

	public Page<Tiding> findByCategory(Category category, Pageable page);

	public Page<Tiding> findByNameContains(String name, Pageable page);
}
