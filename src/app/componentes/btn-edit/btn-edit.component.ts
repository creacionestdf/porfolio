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

  @Output() set_inpvisible:EventEmitter<boolean> = new EventEmitter<boolean>();
 
  mostrar:boolean=true; 
  
  //Muestra formulario
  inp_mostrar(){ this.set_inpvisible.emit(true); }

  constructor( public service: AuthService) { }

  ngOnInit(): void { }
  
}
