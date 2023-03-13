import { Component } from '@angular/core';
import { ProyectosdataService } from './proyectosdata.service';

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
}
