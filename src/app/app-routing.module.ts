import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from "./componentes/registro/registro.component";


const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'login', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

//export const routingComponents=[LogeoComponent];
