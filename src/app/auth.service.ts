import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Us } from "../app/componentes/login/faceUser";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl="http://localhost:8080/login";

  uri = 'http://localhost:4200'; //direccion de la api
  token: any;

  us: string = 'r';
  ps: string = 'a';

  constructor(private http: HttpClient, private router: Router) {}
  /*
  login(em: string, pas: string) {
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
  } */

  loginUser(user: Us): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, user);
  }

  //para cerrar sesion
  logout() {
    localStorage.removeItem('token');
  }

  //un servicio para verificar si existe la sesion
  public logIn(): boolean {
    //return localStorage.getItem('token') !== null;
    return true;
  }

  //enviar us y ps
  enviarDatos(url: string, body: string) {
    return this.http.post(url, body);
  }
}
