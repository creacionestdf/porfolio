import { Component, OnInit } from '@angular/core';
import { Skl } from '../skill/faceSkill';
import { UiService } from '../../servicios/ui.service';
import { Subscription } from 'rxjs';
import { SkillService } from '../../servicios/skill.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})

export class SkillComponent implements OnInit {
  
  titulo: string = 'Soft Skills';
  List: Skl[] = [];

  roles: any[]=[];
  isAdmin = false;
  showAddSkl: boolean = false;
  subscription?: Subscription;

  //Estado Visible Input(text) + Btn_Guardar
    inp_visible: boolean = false;

  constructor(
    private Servicio: SkillService,
    private uiService: UiService,
    private tokenService:TokenService ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddSkl = value));
  }

  ngOnInit(): void {
    this.getIsAdmin();
    this.obtenerSkills();
  }

  //VALIDA QUE SEA "ADMIN"
  public getIsAdmin(){
    this.roles = this.tokenService.getAuthorities();
      for (var i = 0; i < this.roles.length; i++) {
        if("ROLE_ADMIN"== this.roles[i]){ this.isAdmin=true;}
      }
  }

  //LISTA ...
  private obtenerSkills() {
    this.Servicio.getAll().subscribe((e) => {
      this.List = e;
    });
  }

  //NUEVA ...
  public addSkl(obj: Skl) {
    this.Servicio.create(obj).subscribe(
      (data) => {
        this.obtenerSkills();
      },
      (error) => console.log(error)
    );
    this.mostrar(false);
  }

  //GUARDA cont del input + OCULTA input
  public saveSkill(obj: Skl) {
    this.Servicio.actualizar(obj).subscribe((dato) => {
      this.obtenerSkills(); });
  }

  //BORRA ...
  public borrarSkill(obj: Skl) {
    this.Servicio.eliminar(obj.id).subscribe((dato) => {
      this.obtenerSkills(); });
  }

  //OCULTA input
  guardar() {
    this.mostrar(false);
  }

  //MUESTRA & OCULTA input para editar campos
  mostrar(e: boolean) {
    this.inp_visible = e;
  }

  toggleAddSkl(){
    //this.showAddExp=!this.showAddExp;
    this.uiService.toogleAddSkl();
  }
}
