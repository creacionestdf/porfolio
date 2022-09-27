import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skl } from '../componentes/skill/faceSkill';
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
 //URL de Experiencias
  private url: String = environment.BaseUrl + '/skills';
  private UrlNew = this.url+'/crear/';
  private UrlSave = this.url+'/actualizar';
  private UrlDelete = this.url+'/borrar';

  constructor(private http: HttpClient) {}

  //OBTENEMOS todos los registros...
  getAll(): Observable<Skl[]> {
    return this.http.get<Skl[]>(this.url + '/traer');
  }

  //CREAMOS una nueva...
  create(nuevo: Skl): Observable<Skl> {
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