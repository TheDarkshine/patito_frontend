import { Component,OnInit } from '@angular/core';
import { Order } from '../shared/interfaces/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

  orders:Order[] = [];
  
  constructor(private orderService:OrderService){
  
  }

  ngOnInit(): void {
    console.log('consuming Orders list!!!')
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }


}
