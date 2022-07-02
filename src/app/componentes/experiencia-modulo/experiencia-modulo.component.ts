import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Exp} from '../experiencia/faceExperiencia';

@Component({
  selector: 'app-experiencia-modulo',
  templateUrl: './experiencia-modulo.component.html',
  styleUrls: ['./experiencia-modulo.component.css']
})

export class ExperienciaModuloComponent implements OnInit {
  @Input() obj_exp:any;
  @Output() onDeleteExp: EventEmitter<Exp>= new EventEmitter();
  @Output() onToggleBorde: EventEmitter<Exp>= new EventEmitter();

  form:FormGroup;


  //Estado Visible Input(text) + Btn_Guardar
  inp_visible:boolean=false;

  constructor(private formBuilder: FormBuilder) { 
    //creamos el grupo de controles para el formulario
    this.form=this.formBuilder.group({
      inptitulo:['',[]],
      inpcargo:['',[]],
      inpjornada:['',[]],
      inpdire:['',[]],
      inpdesc:['',[]]
    })
  }

  ngOnInit(): void {
    
  }

  //GUARDA cont del input + OCULTA input
  guardar(exp:any){
    //Guarda contenido del input( HACER)
    this.mostrar(false);
    console.log(exp);
  }

  //INGRESA estado a mostrar
  mostrar(e:boolean){
    this.inp_visible=e;
  }

  onDelete(objBorrar:Exp){
    this.onDeleteExp.emit(objBorrar);
  }

  onToggle(obj:Exp){
    this.onToggleBorde.emit(obj);
  }
}
