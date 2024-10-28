package backend.com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.com.entity.Orders;
import backend.com.service.OrdersService;

@RestController
@RequestMapping("orders")
@CrossOrigin
public class OrdersController {

	@Autowired
	OrdersService ordersService;
	
	@PostMapping(value="place",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String orderPlace(@RequestBody Orders orders) {
		return ordersService.placeOrder(orders);
	}
}
