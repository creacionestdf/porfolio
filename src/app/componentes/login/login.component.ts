import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginUsuario } from 'src/app/modelos/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Us } from '../login/faceUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLogeed=false;
  isLogginFail=false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!:string;
  password!:string;
  roles: string[] = [];
  errMsj!:string;
  
  loginForm!: FormGroup;
  
  /*
  title = 'boostrap-popup';
  
  */

  constructor(private tokenService:TokenService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });

    if(this.tokenService.getToken()){
      this.isLogeed=true;
      this.isLogginFail=false;
      this.roles= this.tokenService.getAuthorities();
    }
  }

    onLogin():void{
        this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
        this.authService.login(this.loginUsuario).subscribe(data => {
            this.isLogeed=true;
            this.isLogginFail=false;
            this.tokenService.setToken(data.token);
            this.tokenService.setUserName(data.nombreUsuario);
            this.tokenService.setAuthorities(data.authorities);
            this.roles=data.authorities;
            this.router.navigate([''])
          }, err => {
            this.isLogeed=false;
            this.isLogginFail=true;
            this.errMsj= err.error.mensaje;
            console.log(this.errMsj);
           } );
    }

    

  }

   /*
  loginFormSubmit(): void {
   
    const {
      email,
      password,
    } = this;

    const newObjUs:Us= {
      email,
      password,
    };

    //this.serviceLog.login(this.email, this.password);

    console.log('Loguin: ');
    console.log('email: ' + this.email);
    console.log('pass: ' + this.password);
  }
}
*/