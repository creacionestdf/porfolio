import { Component, OnInit, Input } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent implements OnInit {
  
  form:FormGroup;
  
  //Json Data 
    miPorfolio:any;
  //ID Btn_Edit
    id:string="obj";

  //Estado Visible Input(text) + Btn_Guardar
    inp_visible:boolean=false; 
  
  constructor(
    private datosPorfolio:PorfolioService, 
    private formBuilder: FormBuilder) { 
      //creamos el grupo de controles para el formulario
      this.form=this.formBuilder.group({
        inp_acercade:['',[]]
    })
  }

  ngOnInit(): void {
      this.datosPorfolio.getAcerca().subscribe(data =>{ 
        this.miPorfolio=data; 
      });

      
  }
 
//GUARDA cont del input + OCULTA input
  guardar(obj:any){
    //Guarda contenido del input( HACER )
    this.mostrar(false);
    this.datosPorfolio.updateAcerca(obj).subscribe();

  }
  


  //INGRESA estado a mostrar
  mostrar(e:boolean){
    this.inp_visible=e;
  }

}

