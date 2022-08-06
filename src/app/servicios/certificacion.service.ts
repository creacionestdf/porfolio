import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cert } from "../componentes/certificaciones/faceCertificacion";

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
export class CertificacionService {

  //URL de Experiencias
  private urlCert:String = "porfolioweb-backend.herokuapp.com/certificaciones/";
  private urlCertcrea = 'porfolioweb-backend.herokuapp.com/certificaciones/crear/';
  private urlCertsav = 'porfolioweb-backend.herokuapp.com/certificaciones/actualizar';
  private urlCertdel = 'porfolioweb-backend.herokuapp.com/certificaciones/borrar';

  constructor(private http: HttpClient) {}

  //OBTENEMOS las certificaciones
  getAll(): Observable<Cert[]> {
    return this.http.get<Cert[]>(this.urlCert + "traer");
  }

  //CREAMOS nueva certificacion
  create(new_Cert: Cert): Observable<Cert> {
    console.log("Se recibio cert:"+new_Cert);
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
