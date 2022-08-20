import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './componentes/about/about.component';
import { LogeoComponent } from './componentes/logeo/logeo.component';



const routes: Routes = [
  
  { path: 'login', component: LogeoComponent },
  { path: 'about', component: AboutComponent, pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

export const routingComponents=[LogeoComponent];
