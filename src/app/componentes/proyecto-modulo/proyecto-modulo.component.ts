import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  roles: any[]=[];
  isAdmin = false;

  inptitulo:any;
  inpfecha:any;
  inpdescripcion:any;
  inplink:any;
  inplogo:any;
 
  //Estado Visible Input(text) + Btn_Guardar
  inp_visible:boolean=false;

  constructor(private tokenService:TokenService) { }
  
  ngOnInit(): void { 
    this.getIsAdmin();
    this.obj_pro; 
    this.crea();
  }

  //GUARDA cont del input + OCULTA input
  guardar(obj:Pro){
    this.mostrar(false);
    obj.titulo=this.inptitulo.value;
    obj.fecha=this.inpfecha.value;
    obj.descripcion=this.inpdescripcion.value;
    obj.link=this.inplink.value;
    obj.logo=this.inplogo.value;
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
  tranferIdDelete(obj:Pro){
    this.onDelete.emit(obj);
  }

  crea(){
    this.inptitulo=new FormControl(this.obj_pro.titulo,[Validators.required, Validators.maxLength(10)]);
    this.inpfecha=new FormControl(this.obj_pro.fecha,[]);
    this.inpdescripcion=new FormControl(this.obj_pro.descripcion,[]);
    this.inplink=new FormControl(this.obj_pro.link,[]);
    this.inplogo=new FormControl(this.obj_pro.logo,[]);
    
 
    
    
}

}
