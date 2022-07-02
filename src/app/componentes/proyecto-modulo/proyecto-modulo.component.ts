import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pro } from '../proyectos/faceProyecto';

@Component({
  selector: 'app-proyecto-modulo',
  templateUrl: './proyecto-modulo.component.html',
  styleUrls: ['./proyecto-modulo.component.css']
})

export class ProyectoModuloComponent implements OnInit {
  @Input() obj_pro:any;
  @Output() onDeletePro: EventEmitter<Pro>= new EventEmitter();
  @Output() onGuardarPro: EventEmitter<Pro>= new EventEmitter();

  form:FormGroup;

  inp_visible:boolean=false;

  constructor(private formBuilder: FormBuilder) { 
    //creamos el grupo de controles para el formulario
    this.form=this.formBuilder.group({
      inptitulo:['',[]],
      inpfecha:['',[]],
      inpdescripcion:['',[]],
      inplink:['',[]]
     
    })
  }

  ngOnInit(): void { }

  guardar(pr:Pro){
    //Guarda contenido del input( HACER)
    this.mostrar(false);
    this.onGuardarPro.emit(pr);
  }

  onDelete(objBorrar:Pro){
    this.onDeletePro.emit(objBorrar);
  }

  mostrar(e:boolean){
    this.inp_visible=e;
  }

}
