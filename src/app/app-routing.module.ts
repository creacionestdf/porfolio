import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';

import { LoginComponent } from './componentes/login/login.component';



const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch:"full"},
  { path: "about", component: AboutComponent, pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

export const routingComponents=[LoginComponent];
