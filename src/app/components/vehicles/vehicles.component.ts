import { Component,OnInit } from '@angular/core';
import { Vehicle }  from '../shared/interfaces/vehicle';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit{

  vehicles:Vehicle[] = [];
  isDisabled:boolean[] = [];

  constructor(private vehiclesService:VehiclesService){

  }


  ngOnInit(): void {
    console.log('consuming Vehicles list!!!')
    this.vehiclesService.getVehicles().subscribe(vehicles => this.vehicles = vehicles);
  }

  isDisable(available:number) {
    return !(available>0);
  }

}
