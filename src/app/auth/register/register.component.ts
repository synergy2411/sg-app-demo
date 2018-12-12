import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent {

  username1 = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  password1 = new FormControl('', [
    Validators.required,
    this.hasExclamationMark
  ]);

  registerForm: FormGroup;

  hasExclamationMark(input: FormControl) {
    const hasExcl = input.value.indexOf('!') >= 0;
    return hasExcl ? null : { "needExclamation": true }
  }

  constructor(private fb: FormBuilder, private authService : AuthService) {
    this.registerForm = this.fb.group({
      username: this.username1,
      password: this.password1
    })
  }

  register() {
    console.log("Username : " + this.registerForm.value.username);
    console.log("Password : " + this.registerForm.value.password);
    this.authService.registerUser(
        this.registerForm.value.username,
        this.registerForm.value.password
    );
        this.username1 = new FormControl('');
        this.password1 = new FormControl('');
  }

}
