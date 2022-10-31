
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token.service';
import { HeaderService } from '../../servicios/header.service';
import { hd } from '../header/faceHeader';
import { environment } from "src/environments/environment";


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  public List: hd[] = [];

 //Variables de autenticacion
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

  //IMAGEN
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  varLogo! :string;

  urlImg:String = environment.BaseUrl+"/image";
  urlImgGet = this.urlImg + "/get/";

  constructor( private tokenService: TokenService, private Servicio: HeaderService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getIsAdmin();
    this.obtenerHeader();
  }

  //VALIDA QUE SEA "ADMIN"
  public getIsAdmin(){
    this.roles = this.tokenService.getAuthorities();
      for (var i = 0; i < this.roles.length; i++) {
        if("ROLE_ADMIN"== this.roles[i]){ this.isAdmin=true;}
      }
  }

  //LISTA ...
  public obtenerHeader() {
    this.Servicio.getAll().subscribe(e => {
      this.List = e; 
    });
  }

  //GUARDA cont de los input´s
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
  cancelar() { this.crea(); }

  //CARGA VALORES AL INPUT
  crea() {
    this.inp_foto = new FormControl(this.List[0].foto, []);
    this.inp_nombre= new FormControl(this.List[0].nombre, []);
    this.inp_compania= new FormControl(this.List[0].compania, []);
    this.inp_residencia= new FormControl(this.List[0].residencia, []);
    this.inp_email= new FormControl(this.List[0].email, []);
  }

  //Muestra Img
  public getImage(){
    console.log("getImagen: "+this.List[0].apellido);
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get(this.urlImgGet + this.List[0].foto)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
    }

  //Guarda Logo
  public guardarLogo(nom:string){ this.varLogo=nom; }
}
