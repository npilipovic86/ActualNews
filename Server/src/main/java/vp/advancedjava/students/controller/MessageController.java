package vp.advancedjava.students.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import vp.advancedjava.students.model.Message;
import vp.advancedjava.students.model.Tiding;
import vp.advancedjava.students.service.MessageService;
import vp.advancedjava.students.service.TidingService;




@RestController
public class MessageController {

	@Autowired
	TidingService vestService;
	
	@Autowired
	MessageService messageService;
	
	@GetMapping(value="api/tiding/{id}/messages")
	public ResponseEntity<List<Message>> getMessage(@PathVariable Long id){
		final Tiding vest = vestService.findOne(id);
		if(vest == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		final List<Message> messages = vest.getMessages();
		return new ResponseEntity<>(messages,HttpStatus.OK);
	}
	
	
	@PostMapping(value="api/tiding/{id}/messages")
	public ResponseEntity<Message> saveMessage(@PathVariable Long id,@RequestBody Message message){
		final Tiding vest = vestService.findOne(id);
		if(vest==null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		final Message newMessage = new Message();
		newMessage.setName(message.getName());
		newMessage.setText(message.getText());
		List<Message> lista = vest.getMessages();
		lista.add(newMessage);
		vestService.save(vest);
		return new ResponseEntity<>(newMessage,HttpStatus.CREATED);
		
	}
}
