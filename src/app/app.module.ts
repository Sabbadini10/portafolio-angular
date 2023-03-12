import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { SharedModule } from './shared/component/shared.module';
import { SobreMiComponent } from './sobreMi/sobre-mi/sobre-mi.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos/proyectos.component';
import { CursosComponent } from './cursos/cursos/cursos.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    SobreMiComponent,
    SkillsComponent,
    ProyectosComponent,
    CursosComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
