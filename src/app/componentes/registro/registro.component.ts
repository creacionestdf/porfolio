import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/modelos/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  isLogeed=false;
  isLoginFail=false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!:string;
  roles: string[] = [];
  errMsj!:string;
  us:string="admin";
  ps:string="admin";
  LoginUsuario!: LoginUsuario;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.tokenService.getToken()){
      console.log("true");
      this.isLogeed=true;
      this.isLoginFail=false;
      this.roles= this.tokenService.getAuthorities();
    }else{ console.log("FALSE");}
  }

  onLogin():void{
    
    
    /*
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogeed=true;
        this.isLoginFail=false;
        
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles=data.authorities;
        //this.router.navigate(['']);
      }, 
      err => {
        this.isLogeed=false;
        this.isLoginFail=true;
        this.errMsj= err.error.Mensaje;
        console.log(this.errMsj.length);
       })
*/
      
this.LoginUsuario  = new LoginUsuario(this.us, this.ps);

       this.authService
       .login(this.LoginUsuario)
       .subscribe((data)=>{ 
        console.log(data); 
      });

    }
}
