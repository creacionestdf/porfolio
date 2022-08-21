import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { AcercadeService } from "../../servicios/acercade.service";
import { Ace } from "../acerca-de/faceAcercade";

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
  providers:[AcercadeService]
})

export class AcercaDeComponent implements OnInit {
  titulo:string="Acerca de";
  List: Ace[]=[];
  roles!: string[];
  isAdmin = false;

  form:FormGroup;
  
  //ID Btn_Edit
    id:string="obj";

  //Estado Visible Input(text) + Btn_Guardar
    inp_visible:boolean=false; 
  
  constructor( 
    private tokenService:TokenService,
    private Servicio: AcercadeService,
    private formBuilder: FormBuilder) { 
      //creamos el grupo de controles para el formulario
      this.form=this.formBuilder.group({
        inp_acercade:['',[]]
    });
  }

  ngOnInit(): void {
    this.obtenerAcercade();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
 
  //LISTA ...
  private obtenerAcercade() {
    this.Servicio.getAll().subscribe((e) => {
      this.List = e;
      console.log("resultado: " + e);
    });
  }

  //GUARDA cont del input + OCULTA input
  public save(obj: Ace) {
    this.Servicio.actualizar(obj).subscribe((dato) => {
      console.log(dato);
      this.obtenerAcercade();
      this.mostrar(false);
    });
  }

   
  //MUESTRA & OCULTA input para editar campos
  mostrar(e: boolean) {
    this.inp_visible = e;
  }

}

