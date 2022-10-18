import { Component, OnInit } from '@angular/core';
import { Cert } from '../certificacion/faceCertificacion';
import { CertificacionService } from "../../servicios/certificacion.service";

@Component({
  selector: 'app-certificacion',
  templateUrl: './certificacion.component.html',
  styleUrls: ['./certificacion.component.css']
})
export class CertificacionComponent implements OnInit {

  titulo:string="Licencias y ertificaciones";
  certificacionList: Cert[] =[];

  //Variables de Autenticacion
    roles: any[]=[];
    isAdmin = false;

  constructor( private ServCert: CertificacionService ) {  }

  ngOnInit(): void { this.obtenerCertificaciones(); }
   
  //LISTA ...
  private obtenerCertificaciones() {
    this.ServCert.getAll().subscribe((e) => {
      this.certificacionList = e; });
  }
    
  //NUEVA ...
  public addCert(obj: Cert) {
    if (obj!=null){
      this.ServCert.create(obj).subscribe(
        (data) => { this.obtenerCertificaciones(); },
        (error) => console.log(error)
      );
    }
  }

  //GUARDA cont de los input´s
  public saveCertificacion(cert: Cert) {
    this.ServCert.actualiz(cert).subscribe((dato) => {
      this.obtenerCertificaciones();});
  }
  
  //BORRA ...
  public borrarCertificacion(obj: Cert) {
    this.ServCert.eliminar(obj.id).subscribe((dato) => {
      this.obtenerCertificaciones(); });
  }
}
