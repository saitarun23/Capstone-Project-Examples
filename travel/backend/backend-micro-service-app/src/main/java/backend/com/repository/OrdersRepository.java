package backend.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.com.entity.Orders;

@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer>{

}
