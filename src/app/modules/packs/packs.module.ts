import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TablaComponent } from './components/tabla/tabla.component';
import { PacksRoutingModule } from './packs-routing/packs-routing.module';
import { PacksPrincipalComponent } from './pages/packs-principal/packs-principal.component';



@NgModule({
  imports: [
    CommonModule,
    PacksRoutingModule,
    TablaComponent,
    PacksPrincipalComponent
  ]
})
export class PacksModule { }
