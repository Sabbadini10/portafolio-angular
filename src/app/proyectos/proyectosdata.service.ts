import { Injectable } from '@angular/core';
import { proyectos } from '../shared/data/proyectos.data';

@Injectable({
  providedIn: 'root'
})
export class ProyectosdataService {

  private _data = proyectos
  constructor() { }

  get data(){
    return this._data
  }
}
