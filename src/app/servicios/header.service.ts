import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hd } from "../componentes/header/faceHeader";
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  //URLs
  private url:String = environment.BaseUrl+"/perfil";
  private UrlSave = environment.BaseUrl+'/perfil/actualizar';

  constructor(private http: HttpClient) {}
  
  //OBTENEMOS todos los registros...
  getAll(): Observable<hd[]> {
    return this.http.get<hd[]>(this.url + "/traer");
  }

  //GUARDAMOS cambios realizados
  actualizar(obj:hd): Observable<Object> {
    return this.http.put<hd>(`${this.UrlSave}/${obj.id}`,obj);
  }
}
