import { Component, OnInit } from '@angular/core';
import { Exp } from '../experiencia/faceExperiencia';
import { ExperienciaService } from '../../servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  
  titulo: string = 'Experiencias';
  experienciaList: Exp[] = [];
  
  //Variables de Autenticacion
    roles: any[]=[];
    isAdmin = false;

  constructor( private Servicio: ExperienciaService ) { }

  ngOnInit(): void { this.obtenerExperiencias(); }

  //LISTA ...
  private obtenerExperiencias() {
    this.Servicio.getAll().subscribe((e) => {
      this.experienciaList = e;  });
  }

  //NUEVA ...
  public addExper(obj: Exp) {
    if (obj!=null){
      this.Servicio.create(obj).subscribe(
        (data) => { this.obtenerExperiencias(); },
        (error) => console.log(error)
      );
    }
  }

  //GUARDA cont de los input´s 
  public saveExperiencia(ex: Exp) {
    this.Servicio.actualiz(ex).subscribe((dato) => {
      this.obtenerExperiencias(); });
  }

  //BORRA ...
  public borrarExperiencia(ex: Exp) {
    this.Servicio.eliminar(ex.id).subscribe((dato) => {
      this.obtenerExperiencias(); });
  }
}
