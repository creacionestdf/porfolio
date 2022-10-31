import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpRequest, HttpEvent,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  //Url obtenida de la variable de enviroments
  baseUrl = environment.BaseUrl;

  //Inyeccion de HttpClient
  constructor(private http: HttpClient) { }

  //Metodo que envia los archivos al endpoint /upload 
  upload(file: File): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('files', file);
   
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  //Metodo para Obtener los archivos
  getFiles(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/files`);
  }

  showFile(filename: string){
    return this.http.get(`${this.baseUrl}/files/${filename}`);
  }

  //Metodo para borrar los archivos
  deleteFile(filename: string){
    return this.http.get(`${this.baseUrl}/delete/${filename}`);
  }

}
