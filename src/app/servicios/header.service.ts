import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hd } from "../componentes/header/faceHeader";

const httpOptions : any    = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })};

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  //URLs
  private url:String = "http://localhost:8080/perfil/";
  private UrlSave = 'http://localhost:8080/perfil/actualizar';
  

  constructor(private http: HttpClient) {}

  //OBTENEMOS todos los registros...
  getAll(): Observable<hd[]> {
    return this.http.get<hd[]>(this.url + "traer");
  }

  //GUARDAMOS cambios realizados
  actualizar(obj:hd): Observable<Object> {
    return this.http.put<hd>(`${this.UrlSave}/${obj.id}`,obj);
  }
}
