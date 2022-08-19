import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-btn-edit',
  templateUrl: './btn-edit.component.html',
  styleUrls: ['./btn-edit.component.css']
})
export class BtnEditComponent implements OnInit {
  @Input() set_link:any;

  @Input() btnColor:string="";
  @Input() texto:string="";

  @Output() set_inpvisible = new EventEmitter();

  @Output() btnClick= new EventEmitter();

  mostrar:boolean=true; 
  
  //MUESTRA Btn Edit
    inp_visible:boolean = false;

  //Envia Dato
  inp_mostrar(){
    this.set_inpvisible.emit(true);
  }

  constructor( public service: AuthService) { }

  ngOnInit(): void { }

  func_click(){
    this.btnClick.emit();
  }
}
