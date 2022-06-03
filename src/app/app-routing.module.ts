import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./paginas/login/login.component";
import { RegisterComponent } from "./componentes/register/register.component";
import { HomeComponent} from './paginas/home/home.component';

const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch:"full"},
  { path: "home", component: HomeComponent, pathMatch:"full"},
  { path: "register", component: RegisterComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

export const routingComponents=[LoginComponent, RegisterComponent];
