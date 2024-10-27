package backend.com.entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Entity
@Data
public class Orders {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int oid;
	private String emailid;			//FK
	private float amount;			// total amount 
	@Column(columnDefinition = "enum('pending','shipped','delivered','cancelled')default 'pending'")
	private String status;
	private LocalDateTime orderdate;
	@OneToMany
	@JoinColumn(name="oid")
	private List<OrderItem> listoforders;
}
