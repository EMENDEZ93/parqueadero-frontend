import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from './parqueadero.service';
import { VehiculoModel } from './Vehiculo';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent  {

  displayedColumns: string[] = ['placa', 'tipo', 'fechaIngreso', 'salida'];

  selectedOption = "Moto";

  vehiculos: any;

  trm: any;

  enable: boolean = true;

  vehiculo = {} as VehiculoModel;

  constructor(private parqueaderoService: ParqueaderoService) { }

  setEnable(): void {
    this.enable = !this.enable;
  }

  ngOnInit() {
    this.loadVehiculosParqueados();
    this.getTrm();
  }

  private loadVehiculosParqueados(): void {
    this.parqueaderoService.getVehiculosParqueados().subscribe(vehiculo =>{
      this.vehiculos = vehiculo;
    })
  }

  ingresarCarroParqueadero(vehiculoModel: VehiculoModel){
    vehiculoModel.tipoVehiculo = "Carro";
    vehiculoModel.cilindraje = 0;
    this.parqueaderoService.postIngresoVehiculoParqueadero(vehiculoModel);
  }

  ingresarMotoParqueadero(vehiculoModel: VehiculoModel){
    vehiculoModel.tipoVehiculo = "Moto";
    this.parqueaderoService.postIngresoVehiculoParqueadero(vehiculoModel);
  }

  getTrm(){
    this.parqueaderoService.getTrm().subscribe(trm => {
      this.trm = trm ;
    })
  }

  getSalidaVehiculoParqueadero(idParqueadero: number){
    this.parqueaderoService.getSalidaVehiculoParqueadero(idParqueadero);
  }

}
