package backend.com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.com.entity.OrderItem;
import backend.com.service.OrderItemService;

@RestController
@RequestMapping("orderitem")
@CrossOrigin
public class OrderItemController {

	@Autowired
	OrderItemService orderItemService;
	
	@PostMapping(value="store",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeOrderInfo(@RequestBody OrderItem orderItem) {
		return orderItemService.storeOrderInfo(orderItem);
	}
}
