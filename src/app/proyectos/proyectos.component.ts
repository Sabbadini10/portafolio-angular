import { Component } from '@angular/core';
import { ProyectosdataService } from './services/proyectosdata.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
constructor(private proyectoDataService: ProyectosdataService){}

get data(){
  return this.proyectoDataService.data
}

getUri(nombre: string){
  return encodeURI(nombre);
}
}
