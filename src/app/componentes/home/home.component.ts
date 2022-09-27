import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/modelos/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  isLogeed:boolean=false;
  isLoginFail = false;
  nombre!:string;

  constructor(
    private tokenService:TokenService,
    //private authService: AuthService, 
    //private router: Router
    ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogeed=true;
      this.isLoginFail=false;
      this.nombre = this.tokenService.getUserName();
    }else{
      //this.isLogeed=false;
      //this.nombre= '';
    }
   
  }

  

  
}
