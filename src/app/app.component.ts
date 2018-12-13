import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  toggle = true;

  constructor(public authService : AuthService){}
  
  onLogout(){
    this.authService.logout();
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAnV5RHcOW56J7LAsbLHGagUdq04a-9u6g",
      authDomain: "my-awesome-project-cf418.firebaseapp.com"
    })
  }

  ontoggle(){
    this.toggle = !this.toggle;
  }
}
