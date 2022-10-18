import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token.service';
import { AcercadeService } from '../../servicios/acercade.service';
import { Ace } from '../acerca-de/faceAcercade';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
  providers: [AcercadeService],
})
export class AcercaDeComponent implements OnInit {
  
  titulo: string = 'Acerca de';
  List: Ace[] = [];
  
  //Variables de autenticacion
  roles: any[] = [];
  isAdmin = false;
  rolAdmin: boolean = false;

  //Variable del input
  inp_acercade: any;

  //ID Btn_Edit
  id: string = 'obj';

  //Estado Visible Input(text) + Btn_Guardar
  inp_visible:boolean=false;

  constructor( private tokenService: TokenService, private Servicio: AcercadeService) { }

  ngOnInit(): void {
    this.getIsAdmin();
    this.obtenerAcercade();
  }

  //VALIDA QUE SEA "ADMIN"
  public getIsAdmin() {
    this.roles = this.tokenService.getAuthorities();
    for (var i = 0; i < this.roles.length; i++) {
      if ('ROLE_ADMIN' == this.roles[i]) {
        this.isAdmin = true;
      }
    }
  }

  //LISTA ...
  public obtenerAcercade() {
    this.Servicio.getAll().subscribe((e) => {
      this.List = e; });
  }

  //GUARDA cont del input
  public save(obj: Ace) {
    obj.objetivo = this.inp_acercade.value;
    this.Servicio.actualizar(obj).subscribe((dato) => {
      this.obtenerAcercade(); });
  }

  //CANCELAR formulario
  cancelar() { this.crea(); }

  //CARGA VALORES AL INPUT
  crea() { this.inp_acercade = new FormControl(this.List[0].objetivo, []); }
}