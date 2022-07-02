import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Pro } from '../proyectos/faceProyecto';
import { UiService } from '../../servicios/ui.service';
import {Subscription } from "rxjs";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
  titulo:string="Proyectos";
  proyectoList: Pro[] = [];
  showAddPro:boolean=false;
  subscription?:Subscription;

  //Estado Visible Input(text) + Btn_Guardar
  inp_visible: boolean = false;
  
  constructor(
    private porfolioservice: PorfolioService, 
    private uiService:UiService) {
      this.subscription=this.uiService.onToggle().subscribe(value => this.showAddPro=value)
    }

  ngOnInit(): void {
    this.porfolioservice.getProyecto().subscribe((getListPro) => {
      this.proyectoList = getListPro;
    });
  }
  
  deleteProyecto(pr: Pro) {
    this.porfolioservice.deleteProyecto(pr).subscribe(() => {
      this.proyectoList = this.proyectoList.filter((p) => p.id !== pr.id);
    });
  }

  addPro(pr: Pro) {
    this.porfolioservice.addProyecto(pr).subscribe((pr) => {
      this.proyectoList.push(pr);
    });
  }

  toggleAddPro(){
    //this.showAddExp=!this.showAddExp;
    this.uiService.toogleAddPro();
  }

  guardar(pr:Pro){
    this.porfolioservice.updateProyecto(pr).subscribe();
  }

 
}
