import { Component, OnInit, Output } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Exp } from '../experiencia/faceExperiencia';
import { UiService } from '../../servicios/ui.service';
import {Subscription } from "rxjs";

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})

export class ExperienciaComponent implements OnInit {
  titulo:string="Experiencia";
  experienciaList: Exp[] = [];
  showAddExp:boolean=false;
  subscription?:Subscription;

  //Estado Visible Input(text) + Btn_Guardar
  inp_visible: boolean = false;

  constructor(
    private porfolioservice: PorfolioService, 
    private uiService:UiService) {
      this.subscription=this.uiService.onToggle().subscribe(value => this.showAddExp=value)
    }

  ngOnInit(): void {
   this.porfolioservice.getExperincia().subscribe((getListExp) => {
      this.experienciaList = getListExp;
    });
  }

  //GUARDA cont del input + OCULTA input
  guardar() {
    //Guarda contenido del input( HACER )
    this.mostrar(false);
  }

  //INGRESA estado a mostrar
  mostrar(e: boolean) {
    this.inp_visible = e;
  }

  deleteExperiencia(ex: Exp) {
    this.porfolioservice.deleteExperiencia(ex).subscribe(() => {
      this.experienciaList = this.experienciaList.filter((t) => t.id !== ex.id);
    });
  }

  toogleBorde(ex: Exp) {
    ex.reminder = !ex.reminder;
    this.porfolioservice.updateExpBorde(ex).subscribe();
  }

  addExper(ex: Exp) {
    this.porfolioservice.addExperiencia(ex).subscribe((ex) => {
      this.experienciaList.push(ex);
    });
  }

  toggleAddExp(){
    //this.showAddExp=!this.showAddExp;
    this.uiService.toogleAddExp();
  }
}
