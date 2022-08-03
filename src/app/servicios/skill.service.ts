import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skl } from '../componentes/skill/faceSkill';


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
export class SkillService {

  
 //URL de Experiencias
  private url:String = "http://localhost:8080/skills/";
  private UrlNew = 'http://localhost:8080/skills/crear/';
  private UrlSave = 'http://localhost:8080/skills/actualizar';
  private UrlDelete = 'http://localhost:8080/skills/borrar';

  constructor(private http: HttpClient) {}

  //OBTENEMOS todos los registros...
  getAll(): Observable<Skl[]> {
    return this.http.get<Skl[]>(this.url + "traer");
  }

  //CREAMOS una nueva...
  create(nuevo: Skl): Observable<Skl> {
    console.log("Se recibio Skl:"+nuevo);
    return this.http.post<Skl>(`${this.UrlNew}`, nuevo);
  }

  //GUARDAMOS cambios realizados
  actualizar(obj:Skl): Observable<Object> {
    return this.http.put<Skl>(`${this.UrlSave}/${obj.id}`,obj);
  }

  //ELIMINAMOS certificacion
  eliminar(id:number){
    return this.http.delete<Skl>(`${this.UrlDelete}/${id}`);
  }
  
}