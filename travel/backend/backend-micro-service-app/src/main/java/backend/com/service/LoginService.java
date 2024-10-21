package backend.com.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.com.entity.Login;
import backend.com.repository.LoginRepository;

@Service
public class LoginService {

	@Autowired
	LoginRepository loginRepository;
	
	public String SignIn(Login login) {
		Optional<Login> result=loginRepository.findById(login.getEmailid());
		if(result.isPresent()) {
			Login ll=result.get();
			if(ll.getPassword().equals(login.getPassword())) {
				if(ll.getTypeofuser().equals("admin") && login.getTypeofuser().equals("admin")) {
					return "Admin Login Successfully";
				}else if(ll.getTypeofuser().equals("customer") && login.getTypeofuser().equals("customer")) {
					return "Customer login successfully";
				}else {
					return "type of user wrong";
				}
			}else {
				return "Password is wrong";
			}
		}else {
			return "EmailId is wrong";
		}
	}
	
	
	public String SignUp(Login login) {
		if(login.getTypeofuser().equals("admin")) {
			return "You can't create admin login";
		}else {
			Optional<Login> result=loginRepository.findById(login.getEmailid());
			if(result.isPresent()) {
				return "Account already exists";
			}else {
					loginRepository.save(login);
					return "Account Create Successfully";
			}
		}
	}
}
