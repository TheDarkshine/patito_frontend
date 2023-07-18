import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vehicle }  from '../shared/interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private baseEndpoint = 'http://localhost:9001/';

  constructor(private http:HttpClient) { 
    console.log('Vehicle Service Ready!');
  }

  public getVehicles():Observable<Vehicle[]>{
    return this.http.get(this.baseEndpoint+'vehicles')
           .pipe(map(vehicles => {
             console.log(vehicles);
             return vehicles as Vehicle[]
           })
    );
  }

  public getVehicleDetail(id:string):Observable<Vehicle>{
    return this.http.get<Vehicle>(this.baseEndpoint+'vehicles/'+id);
  }

  public updateVehicle(vehicle:Vehicle){
    return this.http.put(this.baseEndpoint+'vehicles',vehicle,);
}

}
