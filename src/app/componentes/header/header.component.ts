import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeaderService } from '../../servicios/header.service';
import { hd } from '../header/faceHeader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  List: hd[] = [];

  form: FormGroup;

  //ID Btn_Edit
  id: string = 'head';

  //Estado Visible Input(text) + Btn_Guardar
  inp_visible: boolean = false;

  constructor(
    private Servicio: HeaderService,
    private formBuilder: FormBuilder
  ) {
    //creamos el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      inp_foto: ['', []],
      inp_nombre: ['', []],
      inp_compania: ['', []],
      inp_residencia: ['', []],
      inp_email: ['', []],
    });
  }

  ngOnInit(): void {
    this.obtenerHeader();

    /*this.porfolioservice.getPerfil().subscribe(perf=>{
      this.miPorfolio=perf
    });*/
  }

  //LISTA ...
  private obtenerHeader() {
    this.Servicio.getAll().subscribe((e) => {
      this.List = e;
    });
  }

  //GUARDA cont del input + OCULTA input
  public save(obj: hd) {
    this.Servicio.actualizar(obj).subscribe((dato) => {
      console.log(dato);
      this.obtenerHeader();
      this.mostrar(false);
    });
  }

  //MUESTRA & OCULTA input para editar campos
  mostrar(e: boolean) {
    this.inp_visible = e;
  }
}
