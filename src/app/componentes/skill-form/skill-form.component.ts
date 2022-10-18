import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Skl } from '../skill/faceSkill';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {
 
  @Input()  obj_in!: Skl;
  @Input()  form_titulo!:string;
  @Output() obj_out:EventEmitter<Skl>=new EventEmitter();
  
  //Nombre del Formulario
    skillForm!: FormGroup;
  
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.skillForm = this.formBuilder.group({
      titulo: [ this.obj_in.titulo, [Validators.required] ],
      val: [ this.obj_in.val, [Validators.required, Validators.min(1), Validators.max(100)] ]      
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
    envia_obj(){ this.obj_out.emit(this.skillForm.value); }

  //VACIA el contenido de los inputs
    vacia_inputs(){  
      this.skillForm.setValue( { titulo: null, val: null }); 
    }

  //VALIDA que los inputs requeridos no esten vacios
    public valida_inputs():boolean{ return this.skillForm.valid; }

}
