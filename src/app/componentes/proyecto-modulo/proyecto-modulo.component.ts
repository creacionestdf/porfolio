import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token.service';
import { Pro } from '../proyectos/faceProyecto';

@Component({
  selector: 'app-proyecto-modulo',
  templateUrl: './proyecto-modulo.component.html',
  styleUrls: ['./proyecto-modulo.component.css']
})

export class ProyectoModuloComponent implements OnInit {
  @Input() obj_pro:any;
  @Output() onDelete: EventEmitter<Pro>= new EventEmitter();
  @Output() onSave: EventEmitter<Pro>= new EventEmitter();

  //variables de autenticacion
    roles: any[]=[];
    isAdmin = false;

  //Variable del MODAL
    modalSwitch!:boolean;
    titulo:string="Editar Proyecto";

  constructor(private tokenService:TokenService) { }
  
  ngOnInit(): void { 
    this.getIsAdmin();
    this.obj_pro; 
  }

  //GUARDA cont de los input´s
  guardar(setObj:Pro){
    this.cerrarModal();
    this.obj_pro.titulo=setObj.titulo;
    this.obj_pro.fecha=setObj.fecha;
    this.obj_pro.descripcion=setObj.descripcion;
    this.obj_pro.link=setObj.link;
    this.obj_pro.logo=setObj.logo;
    this.onSave.emit(this.obj_pro);
  }

  //VALIDA QUE SEA "ADMIN"
    public getIsAdmin(){
      this.roles = this.tokenService.getAuthorities();
        for (var i = 0; i < this.roles.length; i++) {
          if("ROLE_ADMIN"== this.roles[i]){ this.isAdmin=true;}
        }
    }

  //Envia el id del registro a borrar
    tranferIdDelete(obj:Pro){ this.onDelete.emit(obj); }

  //Visibilidad del MODAL
    openModal(){ this.modalSwitch=true; }
    cerrarModal(){ this.modalSwitch=false; }
}
