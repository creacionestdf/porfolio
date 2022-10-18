import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Pro } from '../proyectos/faceProyecto';

@Component({
  selector: 'app-proyecto-form',
  templateUrl: './proyecto-form.component.html',
  styleUrls: ['./proyecto-form.component.css']
})
export class ProyectoFormComponent implements OnInit {
  @Input()  obj_in!: Pro;
  @Input()  form_titulo!:string;
  @Output() obj_out:EventEmitter<Pro>=new EventEmitter();

  //Nombre del Formulario
    proyectoForm!: FormGroup;
  
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.proyectoForm = this.formBuilder.group({
      titulo: [ this.obj_in.titulo, [Validators.required] ],
      fecha: [ this.obj_in.fecha, [Validators.required] ],
      descripcion: [ this.obj_in.descripcion, [Validators.required] ],
      link: [ this.obj_in.link, [] ],
      logo: [ this.obj_in.logo, [] ]
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
    envia_obj(){  this.obj_out.emit(this.proyectoForm.value); }

  //VACIA el contenido de los inputs
    vacia_inputs(){ 
      this.proyectoForm.setValue( { titulo: null, fecha: null, descripcion: null, link: null, logo: null }); 
    }

  //VALIDA que los inputs requeridos no esten vacios
    public valida_inputs():boolean{ return this.proyectoForm.valid; }

}
