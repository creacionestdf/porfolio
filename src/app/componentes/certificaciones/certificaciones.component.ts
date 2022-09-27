import { Component, OnInit } from '@angular/core';
import { Cert } from '../certificaciones/faceCertificacion';
import { UiService } from '../../servicios/ui.service';
import {Subscription } from "rxjs";
import { CertificacionService } from "../../servicios/certificacion.service";
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})

export class CertificacionesComponent implements OnInit {

  titulo:string="Licencias y certificaciones";
  certificacionList: Cert[] =[];

  roles: any[]=[];
  isAdmin = false;
  showAddCert:boolean=false;
  subscription?:Subscription;
  
  id: number = 0;
  certificacion:any;
  edit:any="hola";

  //Estado Visible Input(text) + Btn_Guardar
  inp_visible: boolean = false;

  constructor(
    private ServCert: CertificacionService,
    private uiService:UiService,
    private tokenService:TokenService) {
      this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddCert = value));
    }

  ngOnInit(): void {
    this.getIsAdmin();
    this.obtenerCertificaciones();
  }

  //VALIDA QUE SEA "ADMIN"
  public getIsAdmin(){
    this.roles = this.tokenService.getAuthorities();
      for (var i = 0; i < this.roles.length; i++) {
        if("ROLE_ADMIN"== this.roles[i]){ this.isAdmin=true;}
      }
  }

  //LISTA ...
  private obtenerCertificaciones() {
    this.ServCert.getAll().subscribe((e) => {
      this.certificacionList = e;
    });
  }
  
  //NUEVA ...
  public addCert(cert: Cert) {
    this.ServCert.create(cert).subscribe(
      (data) => {
        this.obtenerCertificaciones();
      },
      (error) => console.log(error)
    );
    this.mostrar(false);
  }

  //GUARDA cont del input + OCULTA input
  public saveCertificacion(cert: Cert) {
    this.ServCert.actualiz(cert).subscribe((dato) => {
      this.obtenerCertificaciones();});
  }

  //BORRA ...
  public borrarCertificacion(obj: Cert) {
    this.ServCert.eliminar(obj.id).subscribe((dato) => {
      this.obtenerCertificaciones(); });
  }

  //OCULTA input
  guardar() {
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
  
}
