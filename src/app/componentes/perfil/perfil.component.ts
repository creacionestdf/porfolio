import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token.service';
import { HeaderService } from '../../servicios/header.service';
import { hd } from '../header/faceHeader';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  List: hd[] = [];
  isLogeed: boolean = false;
  notLogin:boolean = true;
  roles: any[]=[];
  isAdmin:boolean=false;
  

  //Control_Input
    inp_foto: any;
    inp_nombre: any;
    inp_compania: any;
    inp_residencia: any;
    inp_email: any;

  //ID Btn_Edit
  id: string = 'head';

  constructor( private tokenService: TokenService, private Servicio: HeaderService) { }

  ngOnInit(): void {
    this.estadoLogin();
    this.obtenerHeader();
  }

  //VALIDA QUE SEA "ADMIN"
  public getIsAdmin(){
    this.roles = this.tokenService.getAuthorities();
      for (var i = 0; i < this.roles.length; i++) {
        if("ROLE_ADMIN"== this.roles[i]){ this.isAdmin=true;}
      }
  }

  //GRABA VARIABLES LOGIN
  public estadoLogin(){
    if (this.tokenService.getToken()) {
      this.isLogeed = true;
      this.notLogin = false;
      this. getIsAdmin();
    } else {
      this.isLogeed = false;
      this.notLogin = true;
      this.isAdmin=false;
    }
  }

  //LISTA ...
  private obtenerHeader() {
    this.Servicio.getAll().subscribe((e) => {
      this.List = e;
    });
  }

  //GUARDA cont del input + OCULTA input
  public save(obj: hd) {
    obj.foto=this.inp_foto.value;
    obj.nombre=this.inp_nombre.value;
    obj.compania=this.inp_compania.value;
    obj.residencia=this.inp_residencia.value;
    obj.email=this.inp_email.value;

    this.Servicio.actualizar(obj).subscribe((dato) => {
      this.obtenerHeader();
    });
  }

  //CANCELAR formulario
  cancelar() {
    this.crea();
  }

  //CARGA VALORES AL INPUT
  crea() {
    this.inp_foto = new FormControl(this.List[0].foto, []);
    this.inp_nombre= new FormControl(this.List[0].nombre, []);
    this.inp_compania= new FormControl(this.List[0].compania, []);
    this.inp_residencia= new FormControl(this.List[0].residencia, []);
    this.inp_email= new FormControl(this.List[0].email, []);
  }
 
  /*
  login(): void {
    this.router.navigate(['/login']);
  }*/
}
