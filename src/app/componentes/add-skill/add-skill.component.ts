import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
import { Skl } from '../skill/faceSkill';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})

export class AddSkillComponent implements OnInit {
  @Output() onAddSkl: EventEmitter<Skl> = new EventEmitter();

  //Variables de Autenticacion
    roles: any[]=[];
    isAdmin = false;
  
  //Objeto Nuevo
    newObject:Skl={ id:0,titulo:'',val:''};
  
  //Variable del MODAL
  modalSwitch!:boolean;
  titulo:string="Nuevo Skill";
  
  constructor( private tokenService:TokenService ) { }

  ngOnInit(): void { this.getIsAdmin(); }

  //ENVIA OBJETO skill a MODULO: SKILL
  public get_obj(obj:Skl){
    this.onAddSkl.emit(obj);
    this.cerrarModal();
  }  

  //VALIDA QUE SEA "ADMIN" 
  public getIsAdmin(){
    this.roles = this.tokenService.getAuthorities();
      for (var i = 0; i < this.roles.length; i++) {
        if("ROLE_ADMIN"== this.roles[i]){ this.isAdmin=true;}
      }
  }

  //Visibilidad del MODAL
  openModal(){ this.modalSwitch=true; }
  cerrarModal(){ this.modalSwitch=false; }

}
