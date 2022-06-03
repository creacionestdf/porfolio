import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { CertificacionesComponent } from './certificaciones/certificaciones.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FooterComponent } from './footer/footer.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AcercaDeComponent,
    CertificacionesComponent,
    ExperienciaComponent,
    FooterComponent,
    ProyectosComponent,
    SkillsComponent
  ],  
  exports: [
    HeaderComponent,
    AcercaDeComponent,
    CertificacionesComponent,
    ExperienciaComponent,
    FooterComponent,
    ProyectosComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
