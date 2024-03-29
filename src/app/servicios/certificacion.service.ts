import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cert } from "../componentes/certificacion/faceCertificacion";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CertificacionService {

  //URL de Experiencias
  private urlCert:String = environment.BaseUrl+"/certificaciones";
  private urlCertcrea = this.urlCert+'/crear/';
  private urlCertsav = this.urlCert+'/actualizar';
  private urlCertdel = this.urlCert+'/borrar';

  constructor(private http: HttpClient) {}

  //OBTENEMOS las certificaciones
  getAll(): Observable<Cert[]> {
    return this.http.get<Cert[]>(this.urlCert + "/traer");
  }

  //CREAMOS nueva certificacion
  create(new_Cert: Cert): Observable<Cert> {
    return this.http.post<Cert>(`${this.urlCertcrea}`, new_Cert);
  }

  //GUARDAMOS cambios realizados
  actualiz(cert:Cert): Observable<Object> {
    return this.http.put<Cert>(`${this.urlCertsav}/${cert.id}`,cert);
  }

  //ELIMINAMOS certificacion
  eliminar(id:number){
    return this.http.delete<Cert>(`${this.urlCertdel}/${id}`);
  }
}
