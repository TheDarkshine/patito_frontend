import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NewOrderComponent } from './components/new-order/new-order.component'; 

const routes: Routes = [
  { path: 'login'   , component: LoginComponent },
  { path: 'vehicles'   , component: VehiclesComponent },
  { path: 'orders'   , component: OrdersComponent },
  { path: 'new-order/:id'   , component: NewOrderComponent },
  { path: '**', redirectTo: 'vehicles' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
