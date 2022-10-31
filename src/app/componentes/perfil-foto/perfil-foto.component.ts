import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from "src/environments/environment";
import { TokenService } from 'src/app/servicios/token.service';
import { HttpClient } from '@angular/common/http';
import { hd } from '../header/faceHeader';

@Component({
  selector: 'app-perfil-foto',
  templateUrl: './perfil-foto.component.html',
  styleUrls: ['./perfil-foto.component.css']
})
export class PerfilFotoComponent implements OnInit {
  @Input() obj_perfil!:hd;

  //IMAGEN
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  
  urlImg:String = environment.BaseUrl+"/image";
  urlImgGet = this.urlImg + "/get/";

  constructor(private tokenService:TokenService, private httpClient: HttpClient) { }

  ngOnInit(): void { this.getImage(); }

  //Muestra Imagen
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get(this.urlImgGet + this.obj_perfil.foto)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
    }
  
}
