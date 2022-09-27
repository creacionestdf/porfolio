import { Component, OnInit, Output } from '@angular/core';
import { Exp } from '../experiencia/faceExperiencia';
import { UiService } from '../../servicios/ui.service';
import { Subscription } from 'rxjs';
import { ExperienciaService } from '../../servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  
  titulo: string = 'Experiencia';
  experienciaList: Exp[] = [];

  roles: any[]=[];
  isAdmin = false;
  showAddExp: boolean = false;
  subscription?: Subscription;

  id: number = 0;

  //Estado Visible Input(text) + Btn_Guardar
    inp_visible: boolean = false;

  constructor(
    private ServExp: ExperienciaService,
    private tokenService:TokenService,
    private uiService: UiService ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddExp = value));
  }

  ngOnInit(): void {
    this.getIsAdmin();
    this.obtenerExperiencias();
  }

  //VALIDA QUE SEA "ADMIN"
  public getIsAdmin(){
    this.roles = this.tokenService.getAuthorities();
      for (var i = 0; i < this.roles.length; i++) {
        if("ROLE_ADMIN"== this.roles[i]){ this.isAdmin=true;}
      }
  }
  
  //LISTA ...
  private obtenerExperiencias() {
    this.ServExp.getAll().subscribe((e) => {
      this.experienciaList = e;  });
  }

  //NUEVA ...
  public addExper(ex: Exp) {
    this.ServExp.create(ex).subscribe(
      (data) => {
        this.obtenerExperiencias();
      },
      (error) => console.log(error)
    );
    this.mostrar(false);
  }

  //GUARDA cont del input + OCULTA input
  public saveExperiencia(ex: Exp) {
    this.ServExp.actualiz(ex).subscribe((dato) => {
      this.obtenerExperiencias(); });
  }

  //BORRA ...
  public borrarExperiencia(ex: Exp) {
    this.ServExp.eliminar(ex.id).subscribe((dato) => {
      this.obtenerExperiencias();
    });
  }

  //OCULTA input
  guardar() {
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

 
}
