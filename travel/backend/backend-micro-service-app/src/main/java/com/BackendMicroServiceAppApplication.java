package com;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import backend.com.entity.Login;
import backend.com.repository.LoginRepository;
import jakarta.annotation.PostConstruct;

@SpringBootApplication(scanBasePackages = "backend")
@EnableDiscoveryClient
@EntityScan(basePackages = "backend.com.entity")
@EnableJpaRepositories(basePackages = "backend.com.repository")
public class BackendMicroServiceAppApplication {
	
	@Autowired
	LoginRepository loginRepository;
	
	@PostConstruct			//this annotation method called after all resource ready base upon the project.
	public void init() {
		System.out.println("This method called....");
		Login ll=new Login();
		ll.setEmailid("admin@gmail.com");
		ll.setPassword("admin@1234");
		ll.setTypeofuser("admin");
		Optional<Login> result=loginRepository.findById(ll.getEmailid());
		if(result.isPresent()) {
			System.err.println("Account already present....");
		}else {
			loginRepository.save(ll);
			System.err.println("Admin Account Created");
		}
	}

	public static void main(String[] args) {
		SpringApplication.run(BackendMicroServiceAppApplication.class, args);
		System.err.println("backend micro service up!");
	}

}
