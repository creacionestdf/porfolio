import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ace } from '../componentes/acerca-de/faceAcercade';
import { environment } from '../../environments/environment';
import { TokenService } from './token.service';
import { InterceptorService } from './interceptor-service';

@Injectable({
  providedIn: 'root',
})
export class AcercadeService {
  //URL s
  private url: String = environment.BaseUrl + '/acercade';
  private UrlSave = this.url + '/actualizar';

  constructor(
    private http: HttpClient,  
    private tokenService:TokenService, 
    private inter:InterceptorService) {}

  //OBTENEMOS todos los registros...
  public getAll(): Observable<Ace[]> {
    return this.http.get<Ace[]>('https://porfolioweb-backend.herokuapp.com/acercade/traer');
  }

  //GUARDAMOS cambios realizados
  public actualizar(obj: Ace): Observable<Object> {
    return this.http.put<Ace>(`${this.UrlSave}/${obj.id}`, obj);
  }
}
