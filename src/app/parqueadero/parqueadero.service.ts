import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

@Injectable()
export class ParqueaderoService {

  constructor(public http:HttpClient) { }

  public getVehiculosParqueados(){
    return this.http.get("http://localhost:8000/vehiculos/parqueados");
  }

}
