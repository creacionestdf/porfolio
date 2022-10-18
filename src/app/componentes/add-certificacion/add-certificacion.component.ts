import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
import { Cert } from '../certificacion/faceCertificacion';

@Component({
  selector: 'app-add-certificacion',
  templateUrl: './add-certificacion.component.html',
  styleUrls: ['./add-certificacion.component.css']
})

export class AddCertificacionComponent implements OnInit {
  
  @Output() onAddCert: EventEmitter<Cert> = new EventEmitter();
  
  //Variables de Autenticacion
    roles: any[]=[];
    isAdmin = false;

  //Objeto Nuevo
    newObject:Cert = { id:0, titulo: '', entidad:'', fecha:'', descripcion:'', logo:'' };
  
  //Variable del MODAL
    modalSwitch!:boolean;
    titulo:string="Nueva Certificacion/Licencia";
  
  constructor( private tokenService:TokenService) {  }

  ngOnInit(): void { this.getIsAdmin(); }
  
  //ENVIA OBJETO skill a MODULO: SKILL
  public get_obj(obj:Cert){
    this.onAddCert.emit(obj);
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