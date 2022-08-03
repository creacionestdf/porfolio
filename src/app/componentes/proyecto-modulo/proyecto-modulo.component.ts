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
  @Output() onDelete: EventEmitter<Pro>= new EventEmitter();
  @Output() onSave: EventEmitter<Pro>= new EventEmitter();

  form:FormGroup;

  //Estado Visible Input(text) + Btn_Guardar
  inp_visible:boolean=false;

  constructor( private formBuilder: FormBuilder) { 
    //creamos el grupo de controles para el formulario
    this.form=this.formBuilder.group({
      inptitulo:['',[]],
      inpfecha:['',[]],
      inpdescripcion:['',[]],
      inplink:['',[]],
      inplogo:['',[]],
     
    })
  }

  ngOnInit(): void {  this.obj_pro;}

  //GUARDA cont del input + OCULTA input
  guardar(obj:Pro){
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
  tranferIdDelete(obj:Pro){
    console.log("click Proyecto modulo id: "+obj.id);
    this.onDelete.emit(obj);
  }




  /*
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
  */

}
