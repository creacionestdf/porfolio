import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './componentes/about/about.component';
import { HomeComponent } from './componentes/home/home.component';
import { LogeoComponent } from './componentes/logeo/logeo.component';



const routes: Routes = [
  
  { path: '', component: LogeoComponent },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

export const routingComponents=[LogeoComponent];
