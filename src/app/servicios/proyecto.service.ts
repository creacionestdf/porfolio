import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pro } from "../componentes/proyectos/faceProyecto";
/*
const httpOptions : any    = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })};
*/
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

 //URL de Experiencias
  private url:String = "http://localhost:8080/proyectos/";
  private UrlNew = 'http://localhost:8080/proyectos/crear/';
  private UrlSave = 'http://localhost:8080/proyectos/actualizar';
  private UrlDelete = 'http://localhost:8080/proyectos/borrar';

  constructor(private http: HttpClient) {}

  //OBTENEMOS todos los registros...
  getAll(): Observable<Pro[]> {
    return this.http.get<Pro[]>(this.url + "traer");
  }

  //CREAMOS una nueva...
  create(nuevo: Pro): Observable<Pro> {
    console.log("Se recibio proyecto:"+nuevo);
    return this.http.post<Pro>(`${this.UrlNew}`, nuevo);
  }

  //GUARDAMOS cambios realizados
  actualizar(obj:Pro): Observable<Object> {
    return this.http.put<Pro>(`${this.UrlSave}/${obj.id}`,obj);
  }

  //ELIMINAMOS certificacion
  eliminar(id:number){
    return this.http.delete<Pro>(`${this.UrlDelete}/${id}`);
  }
}
