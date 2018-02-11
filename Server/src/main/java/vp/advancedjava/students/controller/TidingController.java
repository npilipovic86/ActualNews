package vp.advancedjava.students.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vp.advancedjava.students.dto.ResponseDTO;
import vp.advancedjava.students.model.Category;
import vp.advancedjava.students.model.Tiding;
import vp.advancedjava.students.service.CategoryService;
import vp.advancedjava.students.service.TidingService;

@RestController
public class TidingController {
	
	@Autowired
	TidingService tidingService;
	
	@Autowired
	CategoryService categoryService;
	
	
		@PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
	    @GetMapping(value = "api/tiding/{idKategorija}",params = "name")
		public Page<Tiding> getByNameContainAndCategory(@RequestParam String name,
				@PathVariable Long idKategorija,Pageable page) {
			
	    		Category category = categoryService.findOne(idKategorija);
	    		if(name != null ) {
	    			Page<Tiding> vest = tidingService.findByNameContainsAndCategory(name,category,page);
	    		return vest;
	    		}
	    		else {
	    			Page<Tiding> vest1 = tidingService.findByCategory(category, page);	
				return vest1;
	    		}
		}
	
		@PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
	    @GetMapping(value = "api/tiding/",params = "name")
		public Page<Tiding> getByNameContain(@RequestParam String name,Pageable page) {
			Page<Tiding> vest = tidingService.findByNameContains(name,page);
			return vest;
			
		}
	  @GetMapping(value = "api/tiding")
	    public Page<Tiding> getPage(Pageable page) {
	        final Page<Tiding> meniItems = tidingService.findAll(page);
	        return meniItems;
	    }
	  
	  
	  @GetMapping(value = "api/tiding/{id}")
	    public Tiding getVest(@PathVariable Long id) {
	        final Tiding meniItems = tidingService.findOne(id);
	        return meniItems;
	    }

	    @PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
	    @PostMapping(value = "api/tiding")
	    public ResponseEntity<Tiding> create(@RequestBody Tiding meniItem) {
	        final Tiding savedMeniItem = tidingService.save(meniItem);
	        return new ResponseEntity<>(savedMeniItem, HttpStatus.CREATED);
	    }

	    @PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
	    @DeleteMapping(value = "api/tiding/{id}")
	    public ResponseEntity<ResponseDTO> delete(@PathVariable Long id) {
	        final Tiding meniItem = tidingService.findOne(id);
	        if (meniItem == null) {
	            return new ResponseEntity<>(new ResponseDTO("Not found"), HttpStatus.NOT_FOUND);
	        }

	        tidingService.remove(id);
	        return new ResponseEntity<>(new ResponseDTO("OK"), HttpStatus.OK);
	    }
	    
	    @PreAuthorize("hasAnyAuthority('ADMINISTRATOR')")
	    @PutMapping(value = "api/tiding/{id}")
	    public ResponseEntity<Tiding> update(@PathVariable Long id,
	                                 @RequestBody Tiding meniItem) {
	        final Tiding foundItem = tidingService.findOne(id);

	        if (foundItem == null) {
	            return new ResponseEntity<>(meniItem, HttpStatus.NOT_FOUND);
	        }

	        foundItem.setName(meniItem.getName());
	        foundItem.setCategory(meniItem.getCategory());
	        foundItem.setAbout(meniItem.getAbout());
	        foundItem.setContent(meniItem.getContent());

	        final Tiding foundMeniItem = tidingService.save(foundItem);
	        return new ResponseEntity<>(foundMeniItem, HttpStatus.OK);
	    }
	

}
