import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exp } from '../componentes/experiencia/faceExperiencia';
import { environment } from "src/environments/environment.prod";
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
  providedIn: 'root',
})
export class ExperienciaService {
  
  //URL de Experiencias
  private urlExp:String = environment.apiBaseURL+"/experiencias";
  private urlExpcrea = this.urlExp+'/crear/';
  private urlExpsav = this.urlExp+'/actualizar';
  private urlExpdel = this.urlExp+'/borrar';

  constructor(private http: HttpClient) {}

  //obtener experiencias
  getAll(): Observable<Exp[]> {
    //return this.http.get<Exp[]>(`${this.urlExp + 'traer'}`);
    return this.http.get<Exp[]>(this.urlExp + "/traer");
  }

  //crear nueva experiencia
  create(new_exp: Exp): Observable<Exp> {
    console.log("Se recibio ex:"+new_exp);
    return this.http.post<Exp>(`${this.urlExpcrea}`, new_exp);
  }

  //guarda cambios
  actualiz(exp:Exp): Observable<Object> {
    return this.http.put<Exp>(`${this.urlExpsav}/${exp.id}`,exp);
  }

  eliminar(id:number){
    return this.http.delete<Exp>(`${this.urlExpdel}/${id}`);
  }

}
