import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { NuevoUsuario } from '../modelos/nuevo-usuario';
import { LoginUsuario } from '../modelos/login-usuario';
import { JwtDto } from '../modelos/jwt-dto';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authURL = 'https://porfolioweb-backend.herokuapp.com/auth';

    constructor(private httpClient: HttpClient) {}

    public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
      return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
    }

    public login(LoginUsuario: LoginUsuario): Observable<JwtDto>{
      console.log("en auth serv")
      return this.httpClient.post<JwtDto>('https://porfolioweb-backend.herokuapp.com/auth/login', LoginUsuario);
    }
















/*
  uri = 'https://porfolioweb-backend.herokuapp.com/api/login'; 
  token: any;

  constructor(private http: HttpClient, private router: Router) {}
  
  login(em: String, pas: String) {
    if (!this.logIn()) {
      this.http
        .post(this.uri + '/authenticate', { email: em, password: pas })
        .subscribe((resp: any) => {
          //redireccionamos al usuario a su perfil
          this.router.navigate(['register']);
          //guardamos el token en LocalStorage
          localStorage.setItem('auth_token', resp.token);
        });
    }
  } 
  
  //para cerrar sesion
  logout() {
    localStorage.removeItem('token');
  }

  //un servicio para verificar si existe la sesion
  public logIn(): boolean {
    return localStorage.getItem('token') !== null;
    //return true;
  }

  //enviar us y ps
  enviarDatos(url: string, body: string) {
    return this.http.post(url, body);
  }
  */
}
