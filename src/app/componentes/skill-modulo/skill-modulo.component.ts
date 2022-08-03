import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  form:FormGroup;

  //Estado Visible Input(text) + Btn_Guardar
  inp_visible:boolean=false;

  constructor(private formBuilder: FormBuilder) { 
    //creamos el grupo de controles para el formulario
    this.form=this.formBuilder.group({
      inptitulo:['',[]],
      inpvalor:['',[]]
     })
  }

  ngOnInit(): void { this.obj_sk; }

  //GUARDA cont del input + OCULTA input
  guardar(obj:Skl){
    //Guarda contenido del input( HACER)
    this.mostrar(false);
    console.log(obj);
    this.onSave.emit(obj);
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

  
  
  
  /*
  guardar(sk:Skl){
    //Guarda contenido del input( HACER)
    this.mostrar(false);
    this.onGuardarSkl.emit(sk);
  }

  onDelete(objBorrar:Skl){
    this.onDeleteSkl.emit(objBorrar);
  }

  mostrar(e:boolean){
    this.inp_visible=e;
  }
  */
}
