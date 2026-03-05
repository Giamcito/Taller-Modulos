import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TablaComponent } from './components/tabla/tabla.component';
import { OrdersRoutingModule } from './orders-routing/orders-routing.module';
import { OrdersPrincipalComponent } from './pages/orders-principal/orders-principal.component';



@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TablaComponent,
    OrdersPrincipalComponent
  ]
})
export class OrdersModule { }
