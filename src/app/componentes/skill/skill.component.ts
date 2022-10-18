import { Component, OnInit } from '@angular/core';
import { Skl } from '../skill/faceSkill';
import { SkillService } from '../../servicios/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})

export class SkillComponent implements OnInit {
  
  titulo: string = 'Hard & Soft Skills';
  List: Skl[] = [];

  //Variables de Autenticacion
  roles: any[]=[];
  isAdmin = false;
  
  constructor( private Servicio: SkillService ) { }

  ngOnInit(): void { this.obtenerSkills(); }

  //LISTA ...
  private obtenerSkills() {
    this.Servicio.getAll().subscribe((e) => {
      this.List = e; });
  }

  //NUEVA ...
  public addSkl(obj: Skl) {
    if (obj!=null){
      this.Servicio.create(obj).subscribe(
        (data) => { this.obtenerSkills(); },
        (error) => console.log(error)
      );
    }
  }

  //GUARDA cont de los input´s
  public saveSkill(obj: Skl) {
    this.Servicio.actualizar(obj).subscribe((dato) => {
      this.obtenerSkills(); });
  }

  //BORRA ...
  public borrarSkill(obj: Skl) {
    this.Servicio.eliminar(obj.id).subscribe((dato) => {
      this.obtenerSkills(); });
  }
}