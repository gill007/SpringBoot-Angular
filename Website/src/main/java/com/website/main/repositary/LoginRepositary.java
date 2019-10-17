package com.website.main.repositary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.website.main.model.LoginModel;

public interface LoginRepositary extends JpaRepository<LoginModel, String> {

	@Query("SELECT COUNT(u) FROM LoginModel u WHERE u.username=:name and u.password=:pwd")
    Long countByName(@Param("name") String name,@Param("pwd") String pwd);

	
	
	

	

}
