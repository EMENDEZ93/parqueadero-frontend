import { Component, OnInit } from '@angular/core';
import {Vehiculo} from './vehiculo';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent  {

  vehiculos: Vehiculo[] = [
    { id: 1, placa: 'C', tipo: 'Moto', fechaIngreso: '20/01/2019' },
    { id: 2, placa: 'q', tipo: 'Moto', fechaIngreso: '21/01/2019' },
    { id: 3, placa: 'a', tipo: 'Moto', fechaIngreso: '22/01/2019' },
    { id: 4, placa: 's', tipo: 'Carro', fechaIngreso: '23/01/2019' },
    { id: 5, placa: 'd', tipo: 'Carro', fechaIngreso: '24/01/2019' },
  ];

  enable: boolean = true;

  constructor() { }

  setEnable(): void {
    this.enable = !this.enable;
  }

}
