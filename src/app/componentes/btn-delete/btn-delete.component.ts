import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Exp } from "../experiencia/faceExperiencia";

@Component({
  selector: 'app-btn-delete',
  templateUrl: './btn-delete.component.html',
  styleUrls: ['./btn-delete.component.css']
})
export class BtnDeleteComponent implements OnInit {
  @Input() id?:Exp;

  @Input() btnColor:string="";
  @Input() texto:string="";

  @Output() set_inpvisible = new EventEmitter();

  @Output() onDeleteExp: EventEmitter<number> = new EventEmitter();

  mostrar:boolean=true; 
  
  //MUESTRA Btn Edit
    inp_visible:boolean = false;

  //Envia Dato
  inp_mostrar(){
    this.set_inpvisible.emit(true);
  }

  constructor() { }

  ngOnInit(): void { console.log("numero de id: "+this.id?.id);}

  onDelete(){
    console.log("click borrar id: "+this.id);
    this.onDeleteExp.emit(this.id?.id);
  }
}



