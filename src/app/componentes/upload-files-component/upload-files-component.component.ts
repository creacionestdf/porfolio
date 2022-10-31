import { Component, OnInit } from '@angular/core';
import { UploadFilesService } from '../../servicios/upload-files.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload-files-component',
  templateUrl: './upload-files-component.component.html',
  styleUrls: ['./upload-files-component.component.css']
})
export class UploadFilesComponentComponent implements OnInit {

  selectedFiles!: FileList;
  //Es el array que contiene los items para mostrar el progreso de subida de cada archivo
  progressInfo:any = [];
  message = "";
  fileName = "";
  fileInfos!: Observable<any>;

  constructor(private uploadFilesService: UploadFilesService) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadFilesService.getFiles();
  }

  selectFiles(event:any) {
    this.progressInfo = [];
    event.target.files.length == 1 ? this.fileName = event.target.files[0].name : this.fileName = event.target.files.length + " archivos";
    this.selectedFiles = event.target.files;
  }

  uploadFiles() {
    this.message = '';
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
  }

  upload(index:any, file:any) {
    this.progressInfo[index] = { value: 0, fileName: file.name };

    this.uploadFilesService.upload(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          //this.progressInfo[index].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.fileInfos = this.uploadFilesService.getFiles();
        }
      },
      err => {
        this.progressInfo[index].value = 0;
        this.message = 'No se puede subir el archivo ' + file.name;
      });
  }

  deleteFile(filename: string) {
    this.uploadFilesService.deleteFile(filename)
      .subscribe(res => {
        //this.message = res['message'];
        this.fileInfos = this.uploadFilesService.getFiles();
      });
  }

  mostrarFile(filename: string){
    this.uploadFilesService.showFile(filename);
  }

}
