import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-add',
  templateUrl: './btn-add.component.html',
  styleUrls: ['./btn-add.component.css']
})
export class BtnAddComponent implements OnInit {

  @Input() text:string="";
  @Input() color:string="";
  @Output() btnClick=new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onClick(){ this.btnClick.emit(); }

}
