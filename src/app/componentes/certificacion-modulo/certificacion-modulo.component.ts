import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token.service';
import { Cert } from '../certificaciones/faceCertificacion';

@Component({
  selector: 'app-certificacion-modulo',
  templateUrl: './certificacion-modulo.component.html',
  styleUrls: ['./certificacion-modulo.component.css']
})

export class CertificacionModuloComponent implements OnInit {
  @Input() obj_cert:any;
  @Output() onDelete: EventEmitter<Cert>= new EventEmitter();
  @Output() onSave: EventEmitter<Cert>= new EventEmitter();

  roles: any[]=[];
  isAdmin = false;
  
  inplogo:any;
  inptitulo:any;
  inpentidad:any;
  inpfecha:any;
  inpdescripcion:any;

  //Estado Visible Input(text) + Btn_Guardar
    inp_visible:boolean=false;

  constructor(private tokenService:TokenService ) { }

  ngOnInit(): void { 
    this.getIsAdmin();
    this.obj_cert;
    this.crea(); 
  }
  
  //GUARDA cont del input + OCULTA input
  guardar(obj:Cert){
    this.mostrar(false);
    obj.logo=this.inplogo.value;
    obj.titulo=this.inptitulo.value;
    obj.entidad=this.inpentidad.value;
    obj.fecha=this.inpfecha.value;
    obj.descripcion=this.inpdescripcion.value;
    this.onSave.emit(obj);
  }

  //CANCELAR formulario
  cancelar(){
    this.mostrar(false);
    this.crea();
  }

  //VALIDA QUE SEA "ADMIN"
  public getIsAdmin(){
    this.roles = this.tokenService.getAuthorities();
      for (var i = 0; i < this.roles.length; i++) {
        if("ROLE_ADMIN"== this.roles[i]){ this.isAdmin=true;}
      }
  }
  
  //INGRESA estado a mostrar
  mostrar(e:boolean){
    this.inp_visible=e;
  }

  //Envia el id del registro a borrar
  tranferIdDelete(obj:Cert){
    this.onDelete.emit(obj);
  }
 
  crea(){
      this.inplogo=new FormControl(this.obj_cert.logo,[]);
      this.inptitulo=new FormControl(this.obj_cert.titulo,[Validators.required, Validators.maxLength(10)]);
      this.inpentidad=new FormControl(this.obj_cert.entidad,[]);
      this.inpfecha=new FormControl(this.obj_cert.fecha,[]);
      this.inpdescripcion=new FormControl(this.obj_cert.descripcion,[]);
  }
 
}
