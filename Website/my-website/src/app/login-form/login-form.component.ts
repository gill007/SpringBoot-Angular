import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  
  
  

  constructor(private http:HttpClient,private router:Router) { }

  
  
  ngOnInit() {
  }

  loginUser(e)
  {
    e.preventDefault();
    console.log(e);
    let username=e.target.elements[0].value;
    let password=e.target.elements[1].value;

    console.log(username,password);
    
    
    this.http.get('/server/login',{responseType:'text', params: {
      username: username,
      password: password
    }}).subscribe(data=>{
      if(data=="Yes") {
      this.router.navigate(['mainpage']);
      } 
      else {
      window.alert(data)
    }})
    ;
    
    
  }

}
