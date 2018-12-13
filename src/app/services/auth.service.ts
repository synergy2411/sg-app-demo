import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private token = null;
  message: string;

  registerUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log("User created!", response);
      }).catch(err => console.log(err));
  }

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            console.log(token);
            this.token = token;
            this.router.navigate(['users']);
          }).catch(err => console.log(err));
        this.message = "Logged in!"
      })
      .catch(err => {
        console.log(err);
        this.message = err
      });
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    this.token = null;
    firebase.auth().signOut()
      .then(() => {
        console.log("Logout Successfully!")
        this.router.navigate(['login']);
      })
      .catch(err => console.log(err))
  }

  constructor(private router: Router) { }

}
