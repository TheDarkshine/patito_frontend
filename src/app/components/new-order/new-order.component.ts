import { Component, Input, OnInit } from '@angular/core';
import { OrderModel } from '../shared/models/order.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { Vehicle } from '../shared/interfaces/vehicle';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {


  total:number;
  discountApply: number;
  order = new OrderModel();
  vehicle: Vehicle;

  constructor(private activatedRoute: ActivatedRoute,
              private orderService:OrderService,
              private router:Router,
              private vehiclesService:VehiclesService){
    this.activatedRoute.params.subscribe( params => {
          console.log(params['id']);
          this.vehiclesService.getVehicleDetail(params['id']).subscribe(vehicle => {
                  this.vehicle = vehicle
          });
    });
    this.order.units = 0;              
                  
  }

  ngOnInit(){}

  calculateTotal(units:number){
    let subtotal = this.vehicle.price * units;
    console.log(subtotal)
    this.discountApply = subtotal * (this.vehicle.discount/100);
    console.log(this.discountApply);
    this.total = subtotal - this.discountApply;
  }

  saveOrder(form: NgForm){
    // falta agregar estilo para campos faltantes
    if(form.invalid){
       console.log('a mandatory field is missing!')
       return;
    }
    this.order.model = this.vehicle.model;
    this.order.total = this.total;
    this.order.discount = this.discountApply;
    this.vehicle.available -= this.order.units;

    this.orderService.createOrder(this.order)
        .subscribe(response => {
          console.log(response);
          this.vehiclesService.updateVehicle(this.vehicle).subscribe(resp => console.log(resp));
          this.router.navigateByUrl('/orders');
        });
  }

}
