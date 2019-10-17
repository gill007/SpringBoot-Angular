package com.website.main.controller;




import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.website.main.model.LoginModel;
import com.website.main.repositary.LoginRepositary;

@RestController
public class LoginController {
	
	@Autowired
	private LoginRepositary loginRepositary;
	
	@RequestMapping("/login")
	@GetMapping
	public String login(@RequestParam(value="username") String uname, @RequestParam(value="password") String pwd)
	{
	
		if(loginRepositary.existsById(uname))
		{
		  if(loginRepositary.countByName(uname,pwd)>0)
			return "Yes";
		  else
			  return "Incorrect Password";
		}
		else
		{
			return "Incorrect Username";
		}
		
	 
	
		
	}
	
	

}
