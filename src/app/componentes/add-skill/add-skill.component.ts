import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { UiService} from "../../servicios/ui.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  @Output() onAddSkl: EventEmitter<any> = new EventEmitter();

  id: string="";
  titulo: string="";
  val: string="";

  subscription?:Subscription;
  showAddSkl:boolean=false;
  
  constructor( private uiService:UiService ) {
    this.subscription=this.uiService.onToggle()
          .subscribe(value => this.showAddSkl=value)
   }


  ngOnInit(): void {  }

  onSubmit(){
    const {
      id,
      titulo,
      val,
    } = this;

    const newSkl = {
      id,
      titulo,
      val,
    };

    this.onAddSkl.emit(newSkl);
  }
}
