import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
import { Exp } from '../experiencia/faceExperiencia';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css'],
})

export class AddExperienciaComponent implements OnInit {
  
  @Output() onAddExp: EventEmitter<Exp> = new EventEmitter();

  //Variables de Autenticacion
    roles: any[]=[];
    isAdmin = false;
   
  //Objeto Nuevo
    newObject:Exp={ 
      id:0,
      imagen:'',
      titulo: '',
      cargo: '',
      jornada: '',
      tiempo: '',
      direccion:  '',
      descripcion:'',
      reminder: false
    };
   
  //Variable del MODAL
    modalSwitch!:boolean;
    titulo:string="Nueva Experiencia";
    
  constructor( private tokenService:TokenService) {  }

  ngOnInit(): void { this.getIsAdmin(); }

  //ENVIA OBJETO skill a MODULO: SKILL
  public get_obj(obj:Exp){
    this.onAddExp.emit(obj);
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
