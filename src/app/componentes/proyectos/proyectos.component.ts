import { Component, OnInit } from '@angular/core';
import { Pro } from '../proyectos/faceProyecto';
import { Subscription } from "rxjs";
import { ProyectoService } from "../../servicios/proyecto.service";


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
   
  constructor( private Servicio: ProyectoService) {  }

  ngOnInit(): void { this.obtenerProyectos(); }
  
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
