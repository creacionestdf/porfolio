import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { ComponentesModule } from './componentes/componentes.module';


@NgModule({
  declarations: [
    AppComponent,    
    routingComponents,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
