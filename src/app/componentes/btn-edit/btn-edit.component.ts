import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-edit',
  templateUrl: './btn-edit.component.html',
  styleUrls: ['./btn-edit.component.css']
})
export class BtnEditComponent implements OnInit {
  
  mostrar:boolean=false; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
