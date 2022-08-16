import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Us } from '../login/faceUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'boostrap-popup';
  loginForm!: FormGroup;
  email: String = '';
  password: String = '';

  constructor(private serviceLog: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  loginFormSubmit(): void {
    /*
    const {
      email,
      password,
    } = this;

    const newObjUs:Us= {
      email,
      password,
    };*/

    this.serviceLog.login(this.email, this.password);

    console.log('Loguin: ');
    console.log('email: ' + this.email);
    console.log('pass: ' + this.password);
  }
}
