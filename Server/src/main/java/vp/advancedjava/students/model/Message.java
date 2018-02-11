package vp.advancedjava.students.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Message {

	@Id
	@GeneratedValue
	private Long id;

	private String text;

	private String name;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Message(Long id, String name, String text) {
		super();
		this.id = id;
		this.name = name;
		this.text = text;
	}

	public Message() {
		super();
	}

}
