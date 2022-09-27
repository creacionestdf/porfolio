import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Exp } from '../experiencia/faceExperiencia';
import { FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css'],
})

export class AddExperienciaComponent implements OnInit {

  @Output() onAddExp: EventEmitter<Exp> = new EventEmitter();

  id: number=0;
  imagen: string = '';
  titulo: string = '';
  cargo: string = '';
  jornada: string = '';
  tiempo: string = '';
  direccion: string = '';
  descripcion: string = '';
  reminder: boolean = false;

  constructor(private formBuilder: FormBuilder) {  }

  ngOnInit(): void {}

  onSubmit() {
    
    let {
      id,
      imagen,
      titulo,
      cargo,
      jornada,
      tiempo,
      direccion,
      descripcion,
      reminder,
    } = this;

    let newExper = {
      id,
      imagen,
      titulo,
      cargo,
      jornada,
      tiempo,
      direccion,
      descripcion,
      reminder,
    };

    this.onAddExp.emit(newExper);
  }
}
