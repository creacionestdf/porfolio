import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Skl } from '../skill/faceSkill';
import { UiService } from '../../servicios/ui.service';
import { Subscription } from 'rxjs';
import { SkillService } from '../../servicios/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  titulo: string = 'Soft Skills';
  List: Skl[] = [];

  //certificacion:any;
  //edit:any="hola";

  showAddSkl: boolean = false;
  subscription?: Subscription;

  //Estado Visible Input(text) + Btn_Guardar
  inp_visible: boolean = false;

  constructor(
    private Servicio: SkillService,
    private porfolioservice: PorfolioService,
    private uiService: UiService
  ) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddSkl = value));
  }

  ngOnInit(): void {
    this.obtenerSkills();

    /* this.porfolioservice.getSkill().subscribe((getListSkl) => {
      this.skillList = getListSkl;
    });  */
  }

  //LISTA ...
  private obtenerSkills() {
    this.Servicio.getAll().subscribe((e) => {
      this.List = e;
    });
  }

  //NUEVA ...
  public addSkl(obj: Skl) {
    console.log('Skl a enviar:' + obj);
    this.Servicio.create(obj).subscribe(
      (data) => {
        console.log(data);
        this.obtenerSkills();
      },
      (error) => console.log(error)
    );
    this.mostrar(false);
  }

  //GUARDA cont del input + OCULTA input
  public saveSkill(obj: Skl) {
    this.Servicio.actualizar(obj).subscribe((dato) => {
      console.log(dato);
      this.obtenerSkills();
      //this.mostrar(false);
    });
    
  }

  //BORRA ...
  public borrarSkill(obj: Skl) {
    this.Servicio.eliminar(obj.id).subscribe((dato) => {
      console.log(dato);
      this.obtenerSkills();
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


  toggleAddSkl(){
    //this.showAddExp=!this.showAddExp;
    this.uiService.toogleAddSkl();
  }




  /*
  deleteSkill(sk: Skl) {
    this.porfolioservice.deleteSkill(sk).subscribe(() => {
      this.skillList = this.skillList.filter((s) => s.id !== sk.id);
    });
  }

  addSkl(sk: Skl) {
    this.porfolioservice.addSkill(sk).subscribe((sk) => {
      this.skillList.push(sk);
    });
  }

  toggleAddSkl() {
    //this.showAddExp=!this.showAddExp;
    this.uiService.toogleAddSkl();
  }

  guardar(sk: Skl) {
    this.porfolioservice.updateSkill(sk).subscribe();
  }*/
}
