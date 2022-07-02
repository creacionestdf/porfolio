import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Cert } from '../certificaciones/faceCertificacion';
import { UiService } from '../../servicios/ui.service';
import {Subscription } from "rxjs";

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})

export class CertificacionesComponent implements OnInit {
  titulo:string="Licencias y certificaciones";
  certificacionList: Cert[] =[];
  certificacion:any;
  edit:any="hola";

  showAddCert:boolean=false;
  subscription?:Subscription;

  //Estado Visible Input(text) + Btn_Guardar
  inp_visible: boolean = false;

  constructor(private porfolioservice: PorfolioService, 
    private uiService:UiService) {
      this.subscription=this.uiService.onToggle().subscribe(value => this.showAddCert=value)
    }

  ngOnInit(): void {
    this.porfolioservice.getCertificacion().subscribe((getListCert) => {
      this.certificacionList = getListCert;
    });
  }

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

  toggleAddCert(){
    //this.showAddExp=!this.showAddExp;
    this.uiService.toogleAddCert();
  }

  guardar(ce:Cert){
    this.porfolioservice.updateCertificacion(ce).subscribe();
  }
  

}
