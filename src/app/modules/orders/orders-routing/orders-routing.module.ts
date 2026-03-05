import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersPrincipalComponent } from '../pages/orders-principal/orders-principal.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersPrincipalComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
