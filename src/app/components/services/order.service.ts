import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Order } from '../shared/interfaces/order';
import { OrderModel } from '../shared/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseEndpoint = 'http://localhost:9001/';

  constructor(private http:HttpClient) { 
    console.log('Order Service Ready!');
  }

  public getOrders():Observable<Order[]>{
    return this.http.get(this.baseEndpoint+'orders')
           .pipe(map(orders => {
             console.log(orders);
             return orders as Order[]
           })
    );
  }

  public createOrder(order:OrderModel){
      return this.http.post(this.baseEndpoint+'orders',order,);
  }

}
