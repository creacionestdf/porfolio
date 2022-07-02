import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { UiService} from "../../servicios/ui.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})

export class AddProyectoComponent implements OnInit {
  @Output() onAddPro: EventEmitter<any> = new EventEmitter();

  id: string="";
  titulo: string="";
  fecha: string="";
  descripcion: string="";
  link: string="";
  logo: string="";

  
  subscription?:Subscription;
  showAddPro:boolean=false;

  constructor( private uiService:UiService ) {
    this.subscription=this.uiService.onToggle()
          .subscribe(value => this.showAddPro=value)
   }
  
  ngOnInit(): void { }

  onSubmit(){
    const {
      id,
      titulo,
      fecha,
      descripcion,
      link,
      logo,
    } = this;

    const newPro = {
      id,
      titulo,
      fecha,
      descripcion,
      link,
      logo,
    };

    this.onAddPro.emit(newPro);
  }
}
