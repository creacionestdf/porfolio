import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubirArchivoService} from '../../servicios/subir-archivo.service';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {

  @Output() getLogo:EventEmitter<any>=new EventEmitter();
  
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;
  Lista: Array<any> =[];

  formato: String="ATENCIO: Formato .jpg.";
  medidas: String=", Resolucion max 700x700.";
  peso:String="ATENCIO: Peso Maximo 512kb.";

  urlImg:String = environment.BaseUrl+"/image";
  urlImgGet = this.urlImg + "/get/";
  urlImgSave = this.urlImg + "/upload";

  constructor(private httpClient: HttpClient, private ServicioImg: SubirArchivoService) {  }

  ngOnInit(): void { this.getLista(); }
    
  //Carga lista con los nombres de las Imagenas
  public getLista() {
    this.ServicioImg.getList().subscribe((e) => {
      for (let i = 0; i < e.length; i++) {
        this.Lista[i]=(e[i]);
      }
    });
  }

  //Selecciona Imagen
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  
  //Sube Imagen
  public onUpload() {
     
    if(this.selectedFile.size< 512000 && this.selectedFile.type =="image/jpeg"){
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
      
      //Make a call to the Spring Boot Application to save the image
      this.httpClient.post(this.urlImgSave, uploadImageData).subscribe((response) => { } );
        
      this.getLista();
      this.message="Se guardo archivo";
    }
    else if(this.selectedFile.type !="image/jpeg"){
      this.message="Formato de Archivo Incompatible"+this.formato;
    }
    else{
      this.message="Tamaño de Archivo muy grande" + this.peso + this.medidas;
    }
  }

  //Carga Imagen a mostrar
  public getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get(this.urlImgGet = this.urlImg + "/get/" +  this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

  //Seleccion de Imagen
  public seleccionImg(){
    console.log(this.imageName);
    this.getImage();
    this.getLogo.emit(this.imageName);
  }
}
