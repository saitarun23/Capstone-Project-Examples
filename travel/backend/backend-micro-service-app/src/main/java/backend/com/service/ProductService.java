package backend.com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.com.entity.Product;
import backend.com.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;
	
	public String storeProduct(Product product) {
		Optional<Product> result = productRepository.findById(product.getPid());
		if(result.isPresent()) {
			return "Product Id must be unique";
		}else {
			return "Product Stored Successfully";
		}
	}
	
	public String deleteProduct(int pid) {
		Optional<Product> result = productRepository.findById(pid);
		if(result.isPresent()) {
			productRepository.deleteById(pid);
			return "Product deleted Successfully";
		}else {
			return "Product not present";
		}
	}
	
	public String updateProduct(Product product) {
		Optional<Product> result = productRepository.findById(product.getPid());
		if(result.isPresent()) {
			Product p = result.get();
			p.setPrice(product.getPrice());
			p.setDescription(product.getDescription());
			p.setStock(product.getStock());
			productRepository.saveAndFlush(p);
			return "Product Details Updated Successfully";
		}else {
			return "Product not present";
		}
	}
	
	public List<Product> findAllProducts(){
		return productRepository.findAll();
	}
}
