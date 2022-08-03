import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Pro } from '../proyectos/faceProyecto';
import { UiService } from '../../servicios/ui.service';
import { Subscription } from "rxjs";
import { ProyectoService } from "../../servicios/proyecto.service";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
  titulo:string="Proyectos";
  List: Pro[] = [];
    id: number = 0;
  showAddPro:boolean=false;
  subscription?:Subscription;

  //Estado Visible Input(text) + Btn_Guardar
  inp_visible: boolean = false;
  
  constructor(
    private Servicio: ProyectoService,
    private porfolioservice: PorfolioService, 
    private uiService:UiService) {
      this.subscription=this.uiService
      .onToggle()
      .subscribe(value => this.showAddPro=value);
    }

  ngOnInit(): void {
    this.obtenerProyectos();
    
    /*this.porfolioservice.getProyecto().subscribe((getListPro) => {
      this.proyectoList = getListPro;
    });*/
  }
  

  //LISTA ...
  private obtenerProyectos() {
    this.Servicio.getAll().subscribe((e) => {
      this.List = e;
    });
  }

  //NUEVA ...
  public addPro(obj: Pro) {
    console.log('Pro a enviar:' + obj);
    this.Servicio.create(obj).subscribe(
      (data) => {
        console.log(data);
        this.obtenerProyectos();
      },
      (error) => console.log(error)
    );
    this.mostrar(false);
  }

  //GUARDA cont del input + OCULTA input
  public saveProyecto(obj: Pro) {
    this.Servicio.actualizar(obj).subscribe((dato) => {
      console.log(dato);
      this.obtenerProyectos();
      //this.mostrar(false);
    });
    
  }

  //BORRA ...
  public borrarProyecto(obj: Pro) {
    this.Servicio.eliminar(obj.id).subscribe((dato) => {
      console.log(dato);
      this.obtenerProyectos();
    });
  }

  //GUARDA cont del input + OCULTA input
  guardar() {
    //Guarda contenido del input( HACER )
    this.mostrar(false);
  }

  //MUESTRA & OCULTA input para editar campos
  mostrar(e: boolean) {
    this.inp_visible = e;
  }


  toggleAddPro(){
    //this.showAddExp=!this.showAddExp;
    this.uiService.toogleAddPro();
  }




  /*
  deleteProyecto(pr: Pro) {
    this.porfolioservice.deleteProyecto(pr).subscribe(() => {
      this.proyectoList = this.proyectoList.filter((p) => p.id !== pr.id);
    });
  }

  addPro(pr: Pro) {
    this.porfolioservice.addProyecto(pr).subscribe((pr) => {
      this.proyectoList.push(pr);
    });
  }

  toggleAddPro(){
    //this.showAddExp=!this.showAddExp;
    this.uiService.toogleAddPro();
  }

  guardar(pr:Pro){
    this.porfolioservice.updateProyecto(pr).subscribe();
  }
*/
 
}
