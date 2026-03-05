import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacksPrincipalComponent } from '../pages/packs-principal/packs-principal.component';

const routes: Routes = [
  {
    path: '',
    component: PacksPrincipalComponent
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
export class PacksRoutingModule { }
