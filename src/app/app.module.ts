import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { CertificacionesComponent } from './componentes/certificaciones/certificaciones.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { LoginComponent } from './componentes/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BtnEditComponent } from './componentes/btn-edit/btn-edit.component';


@NgModule({
  declarations: [
    AppComponent,    
    
    HeaderComponent,
    AcercaDeComponent,
    CertificacionesComponent,
    ExperienciaComponent,
    FooterComponent,
    ProyectosComponent,
    SkillsComponent,
    LoginComponent,
    routingComponents,
    BtnEditComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
