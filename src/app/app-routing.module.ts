import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './componentes/about/about.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from "./componentes/registro/registro.component";

const routes: Routes = [
   
  { path: '', component: HomeComponent},
  { path: 'login', component: RegistroComponent },
  { path: 'about', component: AboutComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

//export const routingComponents=[LogeoComponent];
