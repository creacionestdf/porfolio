import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  uri = 'http://localhost:4200'; //direccion de la api
  token:any; 

  us:string="r";
  ps:string="a";

  constructor(private http: HttpClient, private router:Router) { }

  login( e:string, p:string){
    this.http.post(this.uri + '/login', {email:e, password:p})
    .subscribe((resp:any) => {
      //redireccionamos al usuario a su perfil
      this.router.navigate(['register']);
      //guardamos el token en LocalStorage
      localStorage.setItem('auth_token', resp.token);
    })
    
  }

  //para cerrar sesion
  logout(){ 
    localStorage.removeItem('token'); 
  }

  //un servicio para verificar si existe la sesion
  public logIn(): boolean{
    return (localStorage.getItem('token') !== null);
  }

  //enviar us y ps
  enviarDatos(url:string, body:string){
    return this.http.post(url,body);
  }

}
