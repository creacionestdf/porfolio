import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Skl } from '../componentes/skill/faceSkill';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  /*
  //Variable que muestra u oculta Form para Editar
    private showHideFormEdit:boolean=false;
    private subjet = new Subject<any>()
  */

 //URL de Experiencias
    private url: String = environment.BaseUrl + '/skills';
    private UrlNew = this.url+'/crear/';
    private UrlSave = this.url+'/actualizar';
    private UrlDelete = this.url+'/borrar';

  constructor(private http: HttpClient) {}

  //OBTIENE todos los registros...
  getAll(): Observable<Skl[]> {
    return this.http.get<Skl[]>(this.url + '/traer');
  }

  //CREA una nueva...
  create(nuevo: Skl): Observable<Skl> {
    return this.http.post<Skl>(`${this.UrlNew}`, nuevo);
  }

  //GUARDA CAMBIOS
  actualizar(obj:Skl): Observable<Object> {
    return this.http.put<Skl>(`${this.UrlSave}/${obj.id}`,obj);
  }

  //ELIMINA
  eliminar(id:number){
    return this.http.delete<Skl>(`${this.UrlDelete}/${id}`);
  }

  /*
  //Cambia es estado de visivilidad del Form
  toogleEditForm():void{
    this.showHideFormEdit=!this.showHideFormEdit;
    this.subjet.next(this.showHideFormEdit);
  }

  onToggle():Observable<any>{
    return this.subjet.asObservable()
  }
  */
}