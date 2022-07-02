import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
private showAddExp:boolean=false;
private showAddCert:boolean=false;
private showAddPro:boolean=false;

private subjet = new Subject<any>()

  constructor() { }

  toogleAddExp():void{
    //console.log('click');
    this.showAddExp=!this.showAddExp;
    this.subjet.next(this.showAddExp);
  }

  toogleAddCert():void{
    //console.log('click');
    this.showAddCert=!this.showAddCert;
    this.subjet.next(this.showAddCert);
  }

  toogleAddPro():void{
    //console.log('click');
    this.showAddPro=!this.showAddPro;
    this.subjet.next(this.showAddPro);
  }

  onToggle():Observable<any>{
    return this.subjet.asObservable()
  }
}
