import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
import { Skl } from "../skill/faceSkill";

@Component({
  selector: 'app-skill-modulo',
  templateUrl: './skill-modulo.component.html',
  styleUrls: ['./skill-modulo.component.css']
})

export class SkillModuloComponent implements OnInit {
  @Input() obj_sk:any;
  @Output() onDelete: EventEmitter<Skl>= new EventEmitter();
  @Output() onSave: EventEmitter<Skl>= new EventEmitter();

  //Variables de autenticacion
    roles: any[]=[];
    isAdmin = false;
 
  //Variable del MODAL
    modalSwitch!:boolean;
    titulo:string="Editar Skill";

  constructor( private tokenService:TokenService) {  }

  ngOnInit(): void { 
    this.getIsAdmin();
    this.obj_sk; 
  }

  //GUARDA cont de los input´s
  guardar(setObj:Skl){
    this.cerrarModal();
    this.obj_sk.titulo=setObj.titulo;
    this.obj_sk.val=setObj.val;
    this.onSave.emit(this.obj_sk);
  }

  //VALIDA QUE SEA "ADMIN"
  public getIsAdmin(){
    this.roles = this.tokenService.getAuthorities();
      for (var i = 0; i < this.roles.length; i++) {
        if("ROLE_ADMIN"== this.roles[i]){ this.isAdmin=true;}
      }
  }

  //Envia el id del registro a borrar
    tranferIdDelete(obj:Skl){ this.onDelete.emit(obj); }

  //Visibilidad del MODAL
    openModal(){ this.modalSwitch=true; }
    cerrarModal(){ this.modalSwitch=false; }
}
