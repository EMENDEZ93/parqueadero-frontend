import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehiculoModel } from './Vehiculo';

@Injectable()
export class ParqueaderoService {

  constructor(public http:HttpClient) { }

  public getVehiculosParqueados(){
    return this.http.get("http://localhost:8000/vehiculos/parqueados");
  }

  postIngresoVehiculoParqueadero(vehiculoModel: VehiculoModel){

    console.log(JSON.stringify(vehiculoModel));

    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})};
    return this.http
      .post('http://localhost:8000/v1/ingreso/vehiculo/parqueadero',
        JSON.stringify(vehiculoModel), httpOptions).subscribe()
  }

  public getTrm(){
    return this.http.get("http://localhost:8000/trm");
  }


  public getSalidaVehiculoParqueadero(idParqueadero: number){
    return this.http.get("http://localhost:8000/salida/vehiculo/parqueadero/" + idParqueadero );
  }

}
