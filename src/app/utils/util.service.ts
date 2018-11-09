import { Injectable } from '@angular/core';
import { VehiculoModel } from '../parqueadero/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  isValidCarro(vehiculoModel: VehiculoModel): string {  
    if(vehiculoModel.placa == ""){
      return "Placa no valida...";
    }
    return "Error en el servicio";
  }


  isValidMoto(vehiculoModel: VehiculoModel): string {  
    if(vehiculoModel.placa == ""){
      return "Placa no valida...";
    }

    if(vehiculoModel.cilindraje <= 0){
      return "Cilindraje no valido...";
    }
    
    return "Error en el servicio";
  }


}
