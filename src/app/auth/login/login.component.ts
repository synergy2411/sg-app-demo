import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message : string;

  login(form : NgForm){
    console.log("Username : " + form.value.username + 
      "\nPassword : " + form.value.password);
      this.authService.loginUser(form.value.username, form.value.password);
        // .then(res => { this.message = "User Logged in!"})
        // .catch(err => this.message = err)
  }
  constructor(public authService : AuthService) { }

  ngOnInit() {
  }

}
