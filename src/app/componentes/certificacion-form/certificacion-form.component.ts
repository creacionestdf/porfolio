import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cert } from '../certificacion/faceCertificacion';

@Component({
  selector: 'app-certificacion-form',
  templateUrl: './certificacion-form.component.html',
  styleUrls: ['./certificacion-form.component.css']
})
export class CertificacionFormComponent implements OnInit {
  @Input()  obj_in!: Cert;
  @Input()  form_titulo!:string;
  @Output() obj_out:EventEmitter<Cert>=new EventEmitter();
  obj_aux!:Cert;

  //Nombre del Formulario
    CertForm!: FormGroup;
    varLogo! :string;

  constructor(  private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.varLogo=this.obj_in.logo;
    this.CertForm = this.formBuilder.group({
      titulo: [ this.obj_in.titulo, [Validators.required] ],
      entidad: [ this.obj_in.entidad, [Validators.required] ] ,
      fecha: [ this.obj_in.fecha, [] ],
      descripcion: [ this.obj_in.descripcion, [Validators.required] ],
      logo: [ this.varLogo, [] ]    
    });
  }

  //Evento Guardar
  onSubmit(){
    if(this.valida_inputs()){ 
      this.envia_obj();
      this.vacia_inputs(); 
    }
  }

//Evento Cerrar
  offSubmit(){ this.obj_out.emit(); }

//ENVIA OBJETO 
  envia_obj(){ this.obj_out.emit(this.CertForm.value); }

//VACIA el contenido de los inputs
  vacia_inputs(){  
    this.CertForm.setValue( { titulo: null, entidad: null, fecha:null, descripcion:null, logo:null }); 
  }

//VALIDA que los inputs requeridos no esten vacios
  public valida_inputs():boolean{ return this.CertForm.valid; }

//Guarda Logo
  guardarLogo(nom:string){ this.varLogo=nom; }
}
