import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Exp } from '../experiencia/faceExperiencia';

@Component({
  selector: 'app-experiencia-form',
  templateUrl: './experiencia-form.component.html',
  styleUrls: ['./experiencia-form.component.css']
})
export class ExperienciaFormComponent implements OnInit {

  @Input()  obj_in!: Exp;
  @Input()  form_titulo!:string;
  @Output() obj_out:EventEmitter<Exp>=new EventEmitter();
  obj_aux!:Exp;

  //Nombre del Formulario
    ExpForm!: FormGroup;
    varLogo! :string;

  constructor(  private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.varLogo=this.obj_in.imagen;
    this.ExpForm = this.formBuilder.group({
      titulo: [ this.obj_in.titulo, [Validators.required] ],
      cargo: [ this.obj_in.cargo, [Validators.required] ] ,
      jornada: [ this.obj_in.jornada, [] ],
      tiempo: [ this.obj_in.tiempo, [] ],
      direccion: [ this.obj_in.direccion, [] ],
      descripcion: [ this.obj_in.descripcion, [Validators.required] ],
      imagen: [ this.varLogo, [] ]    
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
  envia_obj(){ this.obj_out.emit(this.ExpForm.value); }

//VACIA el contenido de los inputs
  vacia_inputs(){  
    this.ExpForm.setValue( { titulo: null, cargo: null, jornada:null, tiempo:null, direccion:null, descripcion:null }); 
  }

//VALIDA que los inputs requeridos no esten vacios
  public valida_inputs():boolean{ return this.ExpForm.valid; }

//Guarda Logo
  guardarLogo(nom:string){ this.varLogo=nom; }
}
