package vp.advancedjava.students.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Tiding {

	@Id
	@GeneratedValue
	private Long id;

	private String name;

	@ManyToOne(fetch = FetchType.EAGER)
	Category category;
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	List<Message> messages;

	private String about;

	private String content;

	public Tiding(Long id, String name, Category category, List<Message> messages, String about, String content) {
		super();
		this.id = id;
		this.name = name;
		this.category = category;
		this.messages = messages;
		this.about = about;
		this.content = content;
	}

	public Tiding() {
		super();

	}

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

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public List<Message> getMessages() {
		return messages;
	}

	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

}
