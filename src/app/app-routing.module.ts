import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {
  path:'',
 loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
},
{
  path:'proyectos',
 loadChildren: () => import('./proyectos/proyectos.module').then((m) => m.ProyectosModule)
},
{
  path:'skills',
 loadChildren: () => import('./skills/skills.module').then((m) => m.SkillsModule)
},
{
  path:'cursos',
 loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule)
},
{
  path:'contacto',
 loadChildren: () => import('./contacto/contacto.module').then((m) => m.ContactoModule)
},
{
  path:'**',
  component: Error404Component
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
