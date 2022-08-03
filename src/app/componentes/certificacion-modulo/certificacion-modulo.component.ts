import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  form:FormGroup;

   //Estado Visible Input(text) + Btn_Guardar
  inp_visible:boolean=false;

  constructor(private formBuilder: FormBuilder) { 
    //creamos el grupo de controles para el formulario
    this.form=this.formBuilder.group({
      inplogo:['',[]],
      inptitulo:['',[]],
      inpentidad:['',[]],
      inpfecha:['',[]],
      inpdescripcion:['',[]]
     
    })
  }

  ngOnInit(): void { this.obj_cert; }

  //GUARDA cont del input + OCULTA input
  guardar(obj:Cert){
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
  tranferIdDelete(obj:Cert){
    console.log("click certificacion modulo id: "+obj.id);
    this.onDelete.emit(obj);
  }
  

  
}
