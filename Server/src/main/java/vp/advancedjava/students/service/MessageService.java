package vp.advancedjava.students.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import vp.advancedjava.students.model.Message;
import vp.advancedjava.students.repository.MessageRepository;

@Component
public class MessageService {

	@Autowired
	MessageRepository messageRepository;

	public List<Message> findAll() {
		return messageRepository.findAll();
	}

}
