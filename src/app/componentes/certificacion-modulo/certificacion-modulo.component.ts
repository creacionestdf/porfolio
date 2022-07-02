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
  @Output() onDeleteCert: EventEmitter<Cert>= new EventEmitter();
  @Output() onGuardarCert: EventEmitter<Cert>= new EventEmitter();

  form:FormGroup;

  inp_visible:boolean=false;

  constructor(private formBuilder: FormBuilder) { 
    //creamos el grupo de controles para el formulario
    this.form=this.formBuilder.group({
      inptitulo:['',[]],
      inpentidad:['',[]],
      inpfecha:['',[]],
      inpdescripcion:['',[]]
     
    })
  }

  ngOnInit(): void { }

  guardar(cer:Cert){
    //Guarda contenido del input( HACER)
    this.mostrar(false);
    this.onGuardarCert.emit(cer);
  }

  onDelete(objBorrar:Cert){
    this.onDeleteCert.emit(objBorrar);
  }

  mostrar(e:boolean){
    this.inp_visible=e;
  }
}
