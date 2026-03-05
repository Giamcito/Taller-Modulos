import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './components/tabla/tabla.component';
import { PacksPrincipalComponent } from './pages/packs-principal/packs-principal.component';
import { PacksRoutingModule } from './packs-routing/packs-routing.module';



@NgModule({
  declarations: [
    TablaComponent,
    PacksPrincipalComponent
  ],
  imports: [
    CommonModule,
    PacksRoutingModule
  ]
})
export class PacksModule { }
