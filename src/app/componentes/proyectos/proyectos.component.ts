import { Component, OnInit } from '@angular/core';
import { Pro } from '../proyectos/faceProyecto';
import { UiService } from '../../servicios/ui.service';
import { Subscription } from "rxjs";
import { ProyectoService } from "../../servicios/proyecto.service";
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
  
  titulo:string="Proyectos";
  List: Pro[] = [];
 
  roles: any[]=[];
  isAdmin = false;
  showAddPro:boolean=false;
  subscription?:Subscription;

  id: number = 0;

  //Estado Visible Input(text) + Btn_Guardar
  inp_visible: boolean = false;
  
  constructor(
    private Servicio: ProyectoService,
    private uiService:UiService,
    private tokenService:TokenService) {
      this.subscription=this.uiService
      .onToggle()
      .subscribe(value => this.showAddPro=value);
    }

  ngOnInit(): void {
    this.getIsAdmin();
    this.obtenerProyectos();
  }
  
  //VALIDA QUE SEA "ADMIN"
  public getIsAdmin(){
    this.roles = this.tokenService.getAuthorities();
      for (var i = 0; i < this.roles.length; i++) {
        if("ROLE_ADMIN"== this.roles[i]){ this.isAdmin=true;}
      }
  }

  //LISTA ...
  private obtenerProyectos() {
    this.Servicio.getAll().subscribe((e) => {
      this.List = e; });
  }

  //NUEVA ...
  public addPro(obj: Pro) {
    this.Servicio.create(obj).subscribe(
      (data) => {
        this.obtenerProyectos();
      },
      (error) => console.log(error)
    );
    this.mostrar(false);
  }

  //GUARDA cont del input + OCULTA input
  public saveProyecto(obj: Pro) {
    this.Servicio.actualizar(obj).subscribe((dato) => {
      this.obtenerProyectos(); });
  }

  //BORRA ...
  public borrarProyecto(obj: Pro) {
    this.Servicio.eliminar(obj.id).subscribe((dato) => {
      this.obtenerProyectos();
    });
  }

  //GUARDA OCULTA input
  guardar() {
    this.mostrar(false);
  }

  //MUESTRA & OCULTA input para editar campos
  mostrar(e: boolean) {
    this.inp_visible = e;
  }

  toggleAddPro(){
    //this.showAddExp=!this.showAddExp;
    this.uiService.toogleAddPro();
  }
 
}
