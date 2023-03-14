import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {ProyectosdataService} from '../services/proyectosdata.service'

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit{

  parametro: string = ''

  proyectoData: any = {}
constructor(
  private activatedRoute: ActivatedRoute,
  private router: Router,
  private proyectosDataService: ProyectosdataService){
 let id = ''

 /* dessanitizar la url */
 activatedRoute.params.subscribe(({id: nombreProyecto}) => {
id = nombreProyecto
 })
 this.parametro = decodeURI(id)
}
ngOnInit(): void{
  this.proyectoData = this.proyectosDataService.getProyecto(this.parametro)
}

goProyectos(){
  this.router.navigate(['/proyectos'])
}
}
