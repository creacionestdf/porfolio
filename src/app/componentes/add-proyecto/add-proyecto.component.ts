import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
import { Pro } from '../proyectos/faceProyecto';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})

export class AddProyectoComponent implements OnInit {
  @Output() onAddPro: EventEmitter<any> = new EventEmitter();

  //Variables de Autenticacion
  roles: any[]=[];
  isAdmin = false;

  //Objeto Nuevo
  newObject:Pro={ id:0, titulo:'', fecha:'', descripcion:'', link:'', logo:''};

  //Variable del MODAL
  modalSwitch!:boolean;
  titulo:string="Nuevo Proyecto";

  constructor( private tokenService:TokenService ) { }
  
  ngOnInit(): void { this.getIsAdmin(); }

  //ENVIA OBJETO al MODULO: PROYECTO
  public get_obj(obj:Pro){
    this.onAddPro.emit(obj);
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
