import { Component, OnInit, ViewChild } from '@angular/core';
import { ParqueaderoService } from './parqueadero.service';
import { VehiculoModel } from './Vehiculo';
import { Message } from '../utils/Message';
import { UtilService } from '../utils/util.service';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent  {

  @ViewChild('carroform') carroform;
  @ViewChild('motoform') motoform;

  alertMessageMoto = {} as Message;
  alertMessageCarro = {} as Message;
  alertMessageSalida = {} as Message;
  displayedColumns: string[] = ['placa', 'tipo', 'fechaIngreso', 'salida'];
  selectedOption = "Moto";
  vehiculos: any;
  trm: any;
  enable: boolean = true;
  vehiculo = {} as VehiculoModel;

  constructor(private parqueaderoService: ParqueaderoService, private utilService: UtilService) { }

  ngOnChanges(){
    this.loadVehiculosParqueados();  
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
    vehiculoModel.placa == null ? vehiculoModel.placa="": vehiculoModel.placa;
    vehiculoModel.tipoVehiculo = "Carro";
    vehiculoModel.cilindraje = 0;
    this.parqueaderoService.postIngresoVehiculoParqueadero(vehiculoModel).subscribe(
      (data) =>{ 
        this.ngOnChanges();
        this.alertMessageCarro.succesfull = vehiculoModel.placa;
        this.alertMessageCarro.status = true; 
        this.alertMessageCarro.type = true;
        this.carroform.resetForm();
      },
      (error) => { 
        this.alertMessageCarro.status = true; 
        this.alertMessageCarro.type = false;
        this.alertMessageCarro.error = error.error;      
      }
    );
  }

  ingresarMotoParqueadero(vehiculoModel: VehiculoModel){
    vehiculoModel.placa == null ? vehiculoModel.placa="": vehiculoModel.placa;
    vehiculoModel.tipoVehiculo = "Moto";
    this.parqueaderoService.postIngresoVehiculoParqueadero(vehiculoModel).subscribe(
      (data) =>{ 
        this.ngOnChanges();
        this.alertMessageMoto.status = true; 
        this.alertMessageMoto.type = true;
        this.alertMessageMoto.succesfull = vehiculoModel.placa;
        this.motoform.resetForm();
      },
      (error) => {
        this.alertMessageMoto.status = true;
        this.alertMessageMoto.type = false;
        this.alertMessageMoto.error = error.error;
      }
    );
  
  }

  getTrm(){
    this.parqueaderoService.getTrm().subscribe(trm => {
      this.trm = trm ;
    })
  }

  getSalidaVehiculoParqueadero(idParqueadero: number){
    this.parqueaderoService.getSalidaVehiculoParqueadero(idParqueadero).subscribe(
      (data) =>{
        this.ngOnChanges();
        this.alertMessageSalida.status = true; 
        this.alertMessageSalida.type = true;
        this.alertMessageSalida.succesfull = data;
      },
      (error) => { 
        this.alertMessageSalida.status = true;
        this.alertMessageSalida.type = false;
        this.alertMessageSalida.error = error.error;
      }
    );
    
  }

}
