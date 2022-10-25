import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
import {Exp} from '../experiencia/faceExperiencia';

@Component({
  selector: 'app-experiencia-modulo',
  templateUrl: './experiencia-modulo.component.html',
  styleUrls: ['./experiencia-modulo.component.css']
})

export class ExperienciaModuloComponent implements OnInit {
  @Input() obj_exp:any;
  @Output() onDelete: EventEmitter<Exp> = new EventEmitter();
  @Output() onSave: EventEmitter<Exp> = new EventEmitter();

  //Variables de autenticacion
    roles: any[]=[];
    isAdmin = false;

  //Variable del MODAL
    modalSwitch!:boolean;
    titulo:string="Editar Experiencia";

  constructor( private tokenService:TokenService ) { }

  ngOnInit(): void {
    this.getIsAdmin();
    this.obj_exp;
  }
    
  //GUARDA cont de los input´s 
  guardar(setObj:Exp){
    this.cerrarModal();
    this.obj_exp.imagen=setObj.imagen;
    this.obj_exp.titulo=setObj.titulo;
    this.obj_exp.cargo=setObj.cargo;
    this.obj_exp.jornada=setObj.jornada;
    this.obj_exp.tiempo=setObj.tiempo;
    this.obj_exp.direccion=setObj.direccion;
    this.obj_exp.descripcion=setObj.descripcion;
    this.onSave.emit(this.obj_exp);
  }

  //VALIDA QUE SEA "ADMIN"
  public getIsAdmin(){
    this.roles = this.tokenService.getAuthorities();
    for (var i = 0; i < this.roles.length; i++) {
      if("ROLE_ADMIN"== this.roles[i]){ this.isAdmin=true;}
    }
  }
  
  //Envia el id del registro a borrar
    tranferIdDelete(obj:Exp){ this.onDelete.emit(obj); }

  //Visibilidad del MODAL
    openModal(){ this.modalSwitch=true; }
    cerrarModal(){ this.modalSwitch=false; }
}
