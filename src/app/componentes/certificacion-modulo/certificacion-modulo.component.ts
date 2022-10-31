import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token.service';
import { Cert } from '../certificacion/faceCertificacion';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-certificacion-modulo',
  templateUrl: './certificacion-modulo.component.html',
  styleUrls: ['./certificacion-modulo.component.css']
})

export class CertificacionModuloComponent implements OnInit {
  @Input() obj_cert:any;
  @Output() onDelete: EventEmitter<Cert>= new EventEmitter();
  @Output() onSave: EventEmitter<Cert>= new EventEmitter();

  //variables de autenticacion
    roles: any[]=[];
    isAdmin = false;
  
  //Variable del MODAL
    modalSwitch!:boolean;
    titulo:string="Editar Licencia/Certificacion";
  
   //IMAGEN
   retrievedImage: any;
   base64Data: any;
   retrieveResonse: any;
   
   urlImg:String = environment.BaseUrl+"/image";
   urlImgGet = this.urlImg + "/get/";

  constructor( private tokenService:TokenService, private httpClient: HttpClient) { }

  ngOnInit(): void { 
    this.getIsAdmin();
    this.obj_cert;
    if(this.obj_cert.logo){ this.getImage(); }   
  }
  
  //GUARDA cont de los input´s 
  guardar(setObj:Cert){
    this.cerrarModal();
    this.obj_cert.logo=setObj.logo;
    this.obj_cert.titulo=setObj.titulo;
    this.obj_cert.entidad=setObj.entidad;
    this.obj_cert.fecha=setObj.fecha;
    this.obj_cert.descripcion=setObj.descripcion;
    this.onSave.emit(this.obj_cert);
  }

  //VALIDA QUE SEA "ADMIN"
  public getIsAdmin(){
    this.roles = this.tokenService.getAuthorities();
      for (var i = 0; i < this.roles.length; i++) {
        if("ROLE_ADMIN"== this.roles[i]){ this.isAdmin=true;}
      }
  }
  
  //Envia el id del registro a borrar
    tranferIdDelete(obj:Cert){ this.onDelete.emit(obj); }
 
  //Visibilidad del MODAL
    openModal(){ this.modalSwitch=true; }
    cerrarModal(){ this.modalSwitch=false; }

    //Muestra Img
    getImage() {
      //Make a call to Sprinf Boot to get the Image Bytes.
      this.httpClient.get(this.urlImgGet + this.obj_cert.logo)
        .subscribe(
          res => {
            this.retrieveResonse = res;
            this.base64Data = this.retrieveResonse.picByte;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          }
        );
      }
}
