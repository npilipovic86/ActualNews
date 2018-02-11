package vp.advancedjava.students.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import vp.advancedjava.students.model.Message;

@Component
public interface MessageRepository extends JpaRepository<Message, Long> {

}
