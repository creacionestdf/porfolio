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
  @Output() onDeleteSkl: EventEmitter<Skl>= new EventEmitter();
  @Output() onGuardarSkl: EventEmitter<Skl>= new EventEmitter();

  form:FormGroup;

  inp_visible:boolean=false;

  constructor(private formBuilder: FormBuilder) { 
    //creamos el grupo de controles para el formulario
    this.form=this.formBuilder.group({
      inptitulo:['',[]],
      inpvalor:['',[]]
     })
  }

  ngOnInit(): void {  }

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
}
