import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  //@Output() onToggleBorde: EventEmitter<Exp> = new EventEmitter();

  roles: any[]=[];
  isAdmin = false;

  inpimagen:any;
  inptitulo:any;
  inpcargo:any;
  inpjornada:any;
  inpdire:any;
  inpdesc:any;
  
  //Estado Visible Input(text) + Btn_Guardar
    inp_visible:boolean=false;

  constructor(private tokenService:TokenService ) { }

  ngOnInit(): void {
    this.getIsAdmin();
    this.obj_exp;
    this.crea();
  }
    
  //GUARDA cont del input + OCULTA input
  guardar(obj:Exp){
    this.mostrar(false);
    obj.imagen=this.inpimagen.value;
    obj.titulo=this.inptitulo.value;
    obj.cargo=this.inpcargo.value;
    obj.jornada=this.inpjornada.value;
    obj.direccion=this.inpdire.value;
    obj.descripcion=this.inpdesc.value;
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
  tranferIdDelete(exp:Exp){
    this.onDelete.emit(exp);
  }

  crea(){
    this.inpimagen=new FormControl(this.obj_exp.imagen,[]);
    this.inptitulo=new FormControl(this.obj_exp.titulo,[Validators.required, Validators.maxLength(10)]);
    this.inpcargo=new FormControl(this.obj_exp.cargo,[]);
    this.inpjornada=new FormControl(this.obj_exp.jornada,[]);
    this.inpdire=new FormControl(this.obj_exp.direccion,[]);
    this.inpdesc=new FormControl(this.obj_exp.descripcion,[]);
  }

  /*
  onToggle(obj:Exp){
    this.onToggleBorde.emit(obj);
  }*/
}
