import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Us } from "../app/componentes/login/faceUser";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  

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
  /*
  loginUser(user: Us): Observable<Object>{
    const resp = this.http.post(environment.BaseUrl , user);
    console.log(resp);
    return resp;
  }*/

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
}
