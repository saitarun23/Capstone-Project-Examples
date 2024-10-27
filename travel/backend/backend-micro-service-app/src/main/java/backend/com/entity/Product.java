package backend.com.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class Product {

	@Id
	private int pid;
	private String pname;
	private float price;
	@Column(columnDefinition = "text")
	private String description;
	private int stock;
	@Column(columnDefinition = "blob")
	private String imageurl;
	@OneToMany
	@JoinColumn(name = "pid")
	private List<OrderItem> listofproducts;
}
