import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  form:FormGroup;
  
  //Json Data 
   //miPorfolio:any;
  //ID Btn_Edit
    id:string="head";
  //Estado Visible Input(text) + Btn_Guardar
  inp_visible:boolean=false; 
  
  //Vector perfil de BD
  miPorfolio:any;

  constructor(
    private porfolioservice:PorfolioService,
    private formBuilder: FormBuilder
    ){ 
      //creamos el grupo de controles para el formulario
      this.form=this.formBuilder.group({
        inp_nombre:['',[]],
        inp_compania:['',[]],
        inp_residencia:['',[]],
        inp_email:['',[]]
     })
    }

  //linea siguiente funciona del json directo sin servidor (SOLO LECTURA)
  // constructor(private datosPorfolio:PorfolioService){  }

  ngOnInit(): void {
    this.porfolioservice.getPerfil().subscribe(perf=>{
      this.miPorfolio=perf
    });

    //this.datosPorfolio.obtenerDatos().subscribe(data =>{
    //  console.log(data);
    //  this.miPorfolio=data;
    //});
  }

  //GUARDA cont del input + OCULTA input
  guardar(obj:any){
    //Guarda contenido del input( HACER )
    this.mostrar(false);
    this.porfolioservice.updatePerfil(obj).subscribe();
    
  }


  //INGRESA estado a mostrar
  mostrar(e:boolean){
    this.inp_visible=e;
  }

  

}
