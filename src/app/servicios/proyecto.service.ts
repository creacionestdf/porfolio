import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pro } from "../componentes/proyectos/faceProyecto";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

 //URL de Experiencias
  private url:String = environment.BaseUrl+"/proyectos";
  private UrlNew = this.url +'/crear/';
  private UrlSave = this.url +'/actualizar';
  private UrlDelete = this.url +'/borrar';

  constructor(private http: HttpClient) {}

  //OBTENEMOS todos los registros...
  getAll(): Observable<Pro[]> {
    return this.http.get<Pro[]>(this.url + "/traer");
  }

  //CREAMOS una nueva...
  create(nuevo: Pro): Observable<Pro> {
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
