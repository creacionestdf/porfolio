import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  roles: any[]=[];
  isAdmin = false;
  
  inptitulo:any;
  inpvalor:any;
  
  //Estado Visible Input(text) + Btn_Guardar
    inp_visible:boolean=false;

  constructor( private tokenService:TokenService) { }

  ngOnInit(): void { 
    this.getIsAdmin();
    this.obj_sk; 
    this.crea(); 
  }

  //GUARDA cont del input + OCULTA input
  guardar(obj:Skl){
    this.mostrar(false);
    obj.titulo=this.inptitulo.value;
    obj.val=this.inpvalor.value;
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
  tranferIdDelete(obj:Skl){
    console.log("click Skill modulo id: "+ obj.id);
    this.onDelete.emit(obj);
  }

  crea(){
    this.inptitulo=new FormControl(this.obj_sk.titulo,[]);
    this.inpvalor=new FormControl(this.obj_sk.val,[]);
  }
  
}
