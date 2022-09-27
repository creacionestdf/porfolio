import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { CertificacionesComponent } from './componentes/certificaciones/certificaciones.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';


import { ReactiveFormsModule } from '@angular/forms';
import { BtnEditComponent } from './componentes/btn-edit/btn-edit.component';
import { ExperienciaModuloComponent } from './componentes/experiencia-modulo/experiencia-modulo.component';
import { AddExperienciaComponent } from './componentes/add-experiencia/add-experiencia.component';
import { BtnAddComponent } from './componentes/btn-add/btn-add.component';

import { AddCertificacionComponent } from './componentes/add-certificacion/add-certificacion.component';
import { CertificacionModuloComponent } from './componentes/certificacion-modulo/certificacion-modulo.component';
import { ProyectoModuloComponent } from './componentes/proyecto-modulo/proyecto-modulo.component';
import { AddProyectoComponent } from './componentes/add-proyecto/add-proyecto.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { SkillModuloComponent } from './componentes/skill-modulo/skill-modulo.component';
import { AddSkillComponent } from './componentes/add-skill/add-skill.component';
import { BtnDeleteComponent } from './componentes/btn-delete/btn-delete.component';

import { HomeComponent } from './componentes/home/home.component';
import { ProdInterceptorService } from './interceptors/prod-interceptor.service';
import { RegistroComponent } from "./componentes/registro/registro.component";
import { TokenService } from 'src/app/servicios/token.service';
import { BtnLoginComponent } from './componentes/btn-login/btn-login.component';
import { BtnLogoutComponent } from './componentes/btn-logout/btn-logout.component';
import { BodyComponent } from './componentes/body/body.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,
    AcercaDeComponent,
    CertificacionesComponent,
    ExperienciaComponent,
    FooterComponent,
    ProyectosComponent,
    BtnEditComponent,
    ExperienciaModuloComponent,
    AddExperienciaComponent,
    BtnAddComponent,
    AddCertificacionComponent,
    CertificacionModuloComponent,
    ProyectoModuloComponent,
    AddProyectoComponent,
    SkillComponent,
    SkillModuloComponent,
    AddSkillComponent,
    BtnDeleteComponent,
    
    HomeComponent,
    RegistroComponent,
    BtnLoginComponent,
    BtnLogoutComponent,
    BodyComponent,
    PerfilComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [ 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProdInterceptorService,
      multi:true
  }
],
  bootstrap: [AppComponent]
})

export class AppModule { }
