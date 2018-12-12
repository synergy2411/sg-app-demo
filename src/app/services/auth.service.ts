import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  registerUser(email : string, password : string ){
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response =>{
        console.log("User created!", response);
      }).catch(err => console.log(err));
  }

  constructor() { }

}
