import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Skl } from "../skill/faceSkill";
import { UiService } from '../../servicios/ui.service';
import {Subscription } from "rxjs";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  titulo:string="Hard & Soft Skills";
  skillList: Skl[] =[];

  //certificacion:any;
  //edit:any="hola";

  showAddSkl:boolean=false;
  subscription?:Subscription;

  //Estado Visible Input(text) + Btn_Guardar
  inp_visible: boolean = false;
  
  constructor(private porfolioservice: PorfolioService, 
    private uiService:UiService) {
      this.subscription=this.uiService.onToggle().subscribe(value => this.showAddSkl=value)
    }

  ngOnInit(): void {
    this.porfolioservice.getSkill().subscribe((getListSkl) => {
      this.skillList = getListSkl;
    });
  }

  deleteSkill(sk: Skl) {
    this.porfolioservice.deleteSkill(sk).subscribe(() => {
      this.skillList = this.skillList.filter((s) => s.id !== sk.id);
    });
  }

  addSkl(sk: Skl) {
    this.porfolioservice.addSkill(sk).subscribe((sk) => {
      this.skillList.push(sk);
    });
  }
  
  toggleAddSkl(){
    //this.showAddExp=!this.showAddExp;
    this.uiService.toogleAddSkl();
  }
  
  guardar(sk:Skl){
    this.porfolioservice.updateSkill(sk).subscribe();
  }

}
