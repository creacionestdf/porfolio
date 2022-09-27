import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms'; 
import { Cert } from '../certificaciones/faceCertificacion';

@Component({
  selector: 'app-add-certificacion',
  templateUrl: './add-certificacion.component.html',
  styleUrls: ['./add-certificacion.component.css']
})

export class AddCertificacionComponent implements OnInit {
  
  @Output() onAddCert: EventEmitter<Cert> = new EventEmitter();
  
  id: any;
  logo: any;
  titulo: any;
  entidad:any;
  fecha: any;
  descripcion: any;
   
  constructor() { }
  
  ngOnInit(): void {  }
  
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