import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-orders-principal',
  templateUrl: './orders-principal.component.html',
  styleUrl: './orders-principal.component.scss',
  standalone: true,
  imports: [CommonModule, TablaComponent]
})
export class OrdersPrincipalComponent {
  title: string = 'Gestión de Órdenes';
  description: string = 'Sistema de administración de órdenes de compra';
}
