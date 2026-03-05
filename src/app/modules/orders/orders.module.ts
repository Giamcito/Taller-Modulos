import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './components/tabla/tabla.component';
import { OrdersPrincipalComponent } from './pages/orders-principal/orders-principal.component';
import { OrdersRoutingModule } from './orders-routing/orders-routing.module';



@NgModule({
  declarations: [
    TablaComponent,
    OrdersPrincipalComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
