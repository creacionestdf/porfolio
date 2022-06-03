import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [ 
    HomeComponent,
    LoginComponent 
    
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    HomeComponent,
    LoginComponent
    
  ]
})
export class PaginasModule { }
