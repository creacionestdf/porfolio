
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { Ar } from '../componentes/subir-archivo/faceArchivo';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  //URL 
  private urlImg:String = environment.BaseUrl+"/image";
  private urlImgGet = this.urlImg + "/get/";
  private urlImgList = this.urlImg + "/list";
  private urlImgSave = this.urlImg+'/upload';
  
  constructor(private http: HttpClient) {}

  //LISTA DE IMAGEN
  getList(): Observable<Ar[]> {
    return this.http.get<Ar[]>(this.urlImgList);
  }
   
}
