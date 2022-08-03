import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cert } from '../componentes/certificaciones/faceCertificacion';
import { Exp } from '../componentes/experiencia/faceExperiencia';
import { Pro } from '../componentes/proyectos/faceProyecto';
import { Skl } from "../componentes/skill/faceSkill";

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*',
  })
}

@Injectable({
  providedIn: 'root',
})
export class PorfolioService {
  private urlPer = 'http://localhost:5000/perfil/';
  private urlAcerca = 'http://localhost:5000/acercade/';
  //private urlExp = 'http://localhost:5000/experiencias/';
  private urlExp:string = "http://localhost:8080/experiencias/traer/";
  private urlCert = 'http://localhost:5000/certificaciones/';
  private urlPro = 'http://localhost:5000/proyectos/';
  private urlSkl = 'http://localhost:5000/skills/';
  
  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  }

  //PERFIL (datos personales):
  getPerfil(): Observable<any[]> {
    return this.http.get<any[]>(this.urlPer)
  }
  updatePerfil(p: any): Observable<any> {
    const url=`${this.urlPer}/${p.id}`
    return this.http.put<any>(url, p, httpOptions)
  }
  


  //ACERCA DE (objetivo):
  getAcerca(): Observable<any[]> {
    return this.http.get<any[]>(this.urlAcerca)
  }
  updateAcerca(te: any): Observable<any> {
    const url=`${this.urlAcerca}/${te.id}`
    return this.http.put<any>(url, te, httpOptions)
  }
  


//EXPERIENCIA:

  xgetExp1(){
    let respuesta=new XMLHttpRequest();
    respuesta.open('GET', 'this.urlExp');

    respuesta.send();

    respuesta.onreadystatechange=function(){
      if(this.readyState===XMLHttpRequest.DONE && this.status===200){
        let respuestaJson= JSON.parse(this.responseText);
        console.log(respuestaJson);
      }
    }
    
  }

  xgetExp2(): Observable<Exp[]>{
    return this.http.get<Exp[]>(`${this.urlExp}`);
  }

  xgetExp3(){
    
  }

  xgetExperincia(): Observable<Exp[]> {
    return this.http.get<Exp[]>(this.urlExp)
  }

  deleteExperiencia(ex: Exp): Observable<Exp> {
    const url = `${this.urlExp}/${ex.id}`
    return this.http.delete<Exp>(url)
  }


  //guarda los cambior en la experiencia
  updateExpBorde(ex: Exp): Observable<Exp> {
    const url=`${this.urlExp}/${ex.id}`
    return this.http.put<Exp>(url, ex, httpOptions)
  }

  addExperiencia(ex: Exp): Observable<Exp>{
    return this.http.post<Exp>(this.urlExp, ex, httpOptions)
  }


  //CERTIFICACIONES
  getCertificacion(): Observable<Cert[]> {
    return this.http.get<Cert[]>(this.urlCert)
  }

  addCertificacion(ce: Cert): Observable<Cert>{
    return this.http.post<Cert>(this.urlCert, ce, httpOptions)
  }

  deleteCertificacion(ce: Cert): Observable<Cert>{
    const url = `${this.urlCert}/${ce.id}`
    return this.http.delete<Cert>(url)
  }

  updateCertificacion(ce: Cert): Observable<Cert> {
    const url=`${this.urlCert}/${ce.id}`
    return this.http.put<Cert>(url, ce, httpOptions)
  }
  

  //PROYECTOS
  getProyecto(): Observable<Pro[]> {
    return this.http.get<Pro[]>(this.urlPro)
  }

  addProyecto(pr: Pro): Observable<Pro>{
    return this.http.post<Pro>(this.urlPro, pr, httpOptions)
  }

  deleteProyecto(pr: Pro): Observable<Pro>{
    const url = `${this.urlPro}/${pr.id}`
    return this.http.delete<Pro>(url)
  }

  updateProyecto(pr: Pro): Observable<Pro> {
    const url=`${this.urlPro}/${pr.id}`
    return this.http.put<Pro>(url, pr, httpOptions)
  }

  //SKILL
  getSkill(): Observable<Skl[]> {
    return this.http.get<Skl[]>(this.urlSkl)
  }

  addSkill(sk: Skl): Observable<Skl>{
    return this.http.post<Skl>(this.urlSkl, sk, httpOptions)
  }

  deleteSkill(sk: Skl): Observable<Skl>{
    const url = `${this.urlSkl}/${sk.id}`
    return this.http.delete<Skl>(url)
  }

  updateSkill(sk: Skl): Observable<Skl> {
    const url=`${this.urlSkl}/${sk.id}`
    return this.http.put<Skl>(url, sk, httpOptions)
  }

}
