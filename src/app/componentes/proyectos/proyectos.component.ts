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

  //Variables de Autenticacion
  roles: any[]=[];
  isAdmin = false;
  
  //id: number = 0;

  //Estado Visible Input(text) + Btn_Guardar
  //inp_visible: boolean = false;
  
  constructor(
    private Servicio: ProyectoService,
    //private tokenService:TokenService
    ) {  }

  ngOnInit(): void {
    //this.getIsAdmin();
    this.obtenerProyectos();
  }
  
  //VALIDA QUE SEA "ADMIN"
  /*
  public getIsAdmin(){
    this.roles = this.tokenService.getAuthorities();
      for (var i = 0; i < this.roles.length; i++) {
        if("ROLE_ADMIN"== this.roles[i]){ this.isAdmin=true;}
      }
  }*/

  //LISTA ...
  private obtenerProyectos() {
    this.Servicio.getAll().subscribe((e) => {
      this.List = e; });
  }

  //NUEVA ...
  public addPro(obj: Pro) {
    if (obj!=null){
      this.Servicio.create(obj).subscribe(
        (data) => { this.obtenerProyectos(); },
        (error) => console.log(error)
      );
    }
  }

  //GUARDA cont del input 
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
}
