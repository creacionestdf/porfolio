import { Component, OnInit, Output } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Exp } from '../experiencia/faceExperiencia';
import { UiService } from '../../servicios/ui.service';
import { Subscription } from 'rxjs';
import { ExperienciaService } from '../../servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  titulo: string = 'Experiencia';
  experienciaList: Exp[] = [];
  id: number = 0;
  showAddExp: boolean = false;
  subscription?: Subscription;

  //Estado Visible Input(text) + Btn_Guardar
  inp_visible: boolean = false;

  constructor(
    private ServExp: ExperienciaService,
    private porfolioservice: PorfolioService,
    private uiService: UiService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddExp = value));
  }

  ngOnInit(): void {
    this.obtenerExperiencias();
  }

  //LISTA experiencias
  private obtenerExperiencias() {
    this.ServExp.getAll().subscribe((e) => {
      this.experienciaList = e;
    });
  }

  //NUEVA experiencias
  public addExper(ex: Exp) {
    console.log('Exp a enviar:' + ex);
    this.ServExp.create(ex).subscribe(
      (data) => {
        console.log(data);
        this.obtenerExperiencias();
      },
      (error) => console.log(error)
    );
    this.mostrar(false);
  }

  //GUARDA cont del input + OCULTA input
  public saveExperiencia(ex: Exp) {
    this.ServExp.actualiz(ex).subscribe((dato) => {
      console.log(dato);
      this.obtenerExperiencias();
      //this.mostrar(false);
    });
    
  }

  //BORRA una experiencia
  public borrarExperiencia(ex: Exp) {
    this.ServExp.eliminar(ex.id).subscribe((dato) => {
      console.log(dato);
      this.obtenerExperiencias();
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
  
  toogleBorde(ex: Exp) {
    /*
    ex.reminder = !ex.reminder;
    this.porfolioservice.updateExpBorde(ex).subscribe();
    */
  }

  toggleAddExp() {
    //this.showAddExp=!this.showAddExp;
    this.uiService.toogleAddExp();
  }
}
