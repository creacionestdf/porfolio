import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ace } from '../componentes/acerca-de/faceAcercade';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AcercadeService {
  //URL s
  private url: String = environment.BaseUrl + '/acercade';
  private UrlSave = this.url + '/actualizar';

  constructor(private http: HttpClient) {}

  //OBTENEMOS todos los registros...
  public getAll(): Observable<Ace[]> {
    return this.http.get<Ace[]>('https://porfolioweb-backend.herokuapp.com/acercade/traer');
  }

  //GUARDAMOS cambios realizados
  public actualizar(obj: Ace): Observable<Object> {
    return this.http.put<Ace>(`${this.UrlSave}/${obj.id}`, obj);
  }
}
