import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Cert } from '../certificaciones/faceCertificacion';
import { UiService } from '../../servicios/ui.service';
import {Subscription } from "rxjs";
import { CertificacionService } from "../../servicios/certificacion.service";

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})

export class CertificacionesComponent implements OnInit {
  titulo:string="Licencias y certificaciones";
  certificacionList: Cert[] =[];
    id: number = 0;
  showAddCert:boolean=false;
  subscription?:Subscription;
    certificacion:any;
    edit:any="hola";

  //Estado Visible Input(text) + Btn_Guardar
  inp_visible: boolean = false;

  constructor(
    private ServCert: CertificacionService,
    private porfolioservice: PorfolioService, 
    private uiService:UiService) {
      this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddCert = value));
    }

  ngOnInit(): void {
    this.obtenerCertificaciones();
    /*
    this.porfolioservice.getCertificacion().subscribe((getListCert) => {
      this.certificacionList = getListCert;
    });*/
  }

  //LISTA ...
  private obtenerCertificaciones() {
    this.ServCert.getAll().subscribe((e) => {
      this.certificacionList = e;
    });
  }

  //NUEVA ...
  public addCert(cert: Cert) {
    console.log('Cert a enviar:' + cert);
    this.ServCert.create(cert).subscribe(
      (data) => {
        console.log(data);
        this.obtenerCertificaciones();
      },
      (error) => console.log(error)
    );
    this.mostrar(false);
  }

  //GUARDA cont del input + OCULTA input
  public saveCertificacion(cert: Cert) {
    this.ServCert.actualiz(cert).subscribe((dato) => {
      console.log(dato);
      this.obtenerCertificaciones();
      //this.mostrar(false);
    });
    
  }

  //BORRA una experiencia
  public borrarCertificacion(obj: Cert) {
    this.ServCert.eliminar(obj.id).subscribe((dato) => {
      console.log(dato);
      this.obtenerCertificaciones();
    });
  }

  //GUARDA cont del input + OCULTA input
  guardar() {
    //Guarda contenido del input( HACER )
    this.mostrar(false);
  }

  //MUESTRA & OCULTA input para editar campos
  mostrar(e: boolean) {
    this.inp_visible = e;
  }
  
  toogleBorde(cert: Cert) {
    /*
    ex.reminder = !ex.reminder;
    this.porfolioservice.updateExpBorde(ex).subscribe();
    */
  }

  toggleAddCert(){
    //this.showAddExp=!this.showAddExp;
    this.uiService.toogleAddCert();
  }
  


  /*
  deleteCertificacion(ce: Cert) {
    this.porfolioservice.deleteCertificacion(ce).subscribe(() => {
      this.certificacionList = this.certificacionList.filter((t) => t.id !== ce.id);
    });
  }

  addCert(ce: Cert) {
    this.porfolioservice.addCertificacion(ce).subscribe((ce) => {
      this.certificacionList.push(ce);
    });
  }

  

  guardar(ce:Cert){
    this.porfolioservice.updateCertificacion(ce).subscribe();
  }
  */

}
