import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Us } from "../login/faceUser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'boostrap-popup';
  loginForm!: FormGroup;
  user: Us=new Us();

  v_email:any;
  v_pass:any;

  constructor( private serviceLog: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  get emailField(): any {
    this.v_email = this.loginForm.get('email');
    return this.v_email;
  }
  get passwordField(): any {
    this.v_pass= this.loginForm.get('password');
    return this.v_pass;
  }

  loginFormSubmit(): void {
    this.serviceLog.loginUser(this.user).subscribe(data => { 
      window.location.href="/porfolio"
    },error=>alert("Por favor ingrese un user y pass correctos"));
  }

 
  hola(){
    console.log("Hola click");
  }

  
}