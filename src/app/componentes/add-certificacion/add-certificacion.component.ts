import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { UiService} from "../../servicios/ui.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-certificacion',
  templateUrl: './add-certificacion.component.html',
  styleUrls: ['./add-certificacion.component.css']
})

export class AddCertificacionComponent implements OnInit {
  @Output() onAddCert: EventEmitter<any> = new EventEmitter();
  
  id: string = '';
  logo: string = '';
  titulo: string = '';
  entidad: string = '';
  fecha: string = '';
  descripcion: string = '';

  subscription?:Subscription;
  showAddCert:boolean=false;

  constructor( private uiService:UiService ) {
    this.subscription=this.uiService.onToggle()
          .subscribe(value => this.showAddCert=value)
   }

  ngOnInit(): void {}

  onSubmit(){
    const {
      id,
      logo,
      titulo,
      entidad, 
      fecha,
      descripcion,
    } = this;

    const newCert = {
      id,
      logo,
      titulo,
      entidad, 
      fecha,
      descripcion,
    };

    this.onAddCert.emit(newCert);
  }
}


