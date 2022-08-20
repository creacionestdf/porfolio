import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { CertificacionesComponent } from './componentes/certificaciones/certificaciones.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

import { LoginComponent } from './componentes/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BtnEditComponent } from './componentes/btn-edit/btn-edit.component';
import { ExperienciaModuloComponent } from './componentes/experiencia-modulo/experiencia-modulo.component';
import { AddExperienciaComponent } from './componentes/add-experiencia/add-experiencia.component';
import { BtnAddComponent } from './componentes/btn-add/btn-add.component';
import { AboutComponent } from './componentes/about/about.component';
import { AddCertificacionComponent } from './componentes/add-certificacion/add-certificacion.component';
import { CertificacionModuloComponent } from './componentes/certificacion-modulo/certificacion-modulo.component';
import { ProyectoModuloComponent } from './componentes/proyecto-modulo/proyecto-modulo.component';
import { AddProyectoComponent } from './componentes/add-proyecto/add-proyecto.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { SkillModuloComponent } from './componentes/skill-modulo/skill-modulo.component';
import { AddSkillComponent } from './componentes/add-skill/add-skill.component';
import { BtnDeleteComponent } from './componentes/btn-delete/btn-delete.component';
import { LogeoComponent } from './componentes/logeo/logeo.component';



@NgModule({
  declarations: [
    AppComponent,    
    
    HeaderComponent,
    AcercaDeComponent,
    CertificacionesComponent,
    ExperienciaComponent,
    FooterComponent,
    ProyectosComponent,
    
    LoginComponent,
    routingComponents,
    BtnEditComponent,
    ExperienciaModuloComponent,
    AddExperienciaComponent,
    BtnAddComponent,
    AboutComponent,
    AddCertificacionComponent,
    CertificacionModuloComponent,
    ProyectoModuloComponent,
    AddProyectoComponent,
    SkillComponent,
    SkillModuloComponent,
    AddSkillComponent,
    BtnDeleteComponent,
    LogeoComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
