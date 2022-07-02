import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Exp } from '../experiencia/faceExperiencia';
import { UiService} from "../../servicios/ui.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css'],
})
export class AddExperienciaComponent implements OnInit {
  @Output() onAddExp: EventEmitter<Exp> = new EventEmitter();

  id: string = '';
  imagen: string = '';
  titulo: string = '';
  cargo: string = '';
  jornada: string = '';
  tiempo: string = '';
  direccion: string = '';
  descripcion: string = '';
  reminder: boolean = false;

  subscription?:Subscription;
  showAddExp:boolean=false;

  constructor( private uiService:UiService) {
    this.subscription=this.uiService.onToggle()
          .subscribe(value => this.showAddExp=value)
  }

  ngOnInit(): void {}

  onSubmit() {
    /*if (this.titulo.length === 0) {
      alert('Alerta');
      return
    }
      
    
    const newex:Exp = {
      id: this.id,
      imagen: this.imagen,
      titulo: this.titulo,
      cargo: this.cargo,
      jornada: this.jornada,
      tiempo: this.tiempo,
      direccion: this.direccion,
      descripcion:this.descripcion,
      reminder: this.reminder
    }

           
    
    */
    //console.log(newExper.cargo)

    const {
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

    const newExper = {
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
