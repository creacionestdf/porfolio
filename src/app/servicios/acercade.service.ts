import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ace } from "../componentes/acerca-de/faceAcercade";

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
export class AcercadeService {

  //URL s
  private url:String = "https://porfolioweb-backend.herokuapp.com/acercade/";
  private UrlSave = 'https://porfolioweb-backend.herokuapp.com/acercade/actualizar';
  

  constructor(private http: HttpClient) {}

  //OBTENEMOS todos los registros...
  getAll(): Observable<Ace[]> {
    return this.http.get<Ace[]>(this.url + "traer");
  }

  //GUARDAMOS cambios realizados
  actualizar(obj:Ace): Observable<Object> {
    return this.http.put<Ace>(`${this.UrlSave}/${obj.id}`,obj);
  }
 
}
