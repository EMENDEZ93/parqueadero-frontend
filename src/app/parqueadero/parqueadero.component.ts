import { Component, OnInit } from '@angular/core';
import {Vehiculo} from './vehiculo';
import { ParqueaderoService } from './parqueadero.service';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent  {

  vehiculos: any;

  enable: boolean = true;

  constructor(private parqueaderoService: ParqueaderoService) { }

  setEnable(): void {
    this.enable = !this.enable;
  }

  ngOnInit() {
    this.loadVehiculosParqueados();
  }

  private loadVehiculosParqueados(): void {
    this.parqueaderoService.getVehiculosParqueados().subscribe(vehiculo =>{
      this.vehiculos = vehiculo
      console.log(vehiculo);
    })
  }

}
