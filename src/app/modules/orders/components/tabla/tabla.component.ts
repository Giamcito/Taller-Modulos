import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Order } from '../../interfaces/orders.interface';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class TablaComponent implements OnInit {
  ordenes: Order[] = [];
  displayedColumns: (keyof Order)[] = ['id', 'orderNumber', 'customerName', 'total', 'date', 'status'];

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.cargarOrdenes();
  }

  /**
   * Carga todas las órdenes desde el servicio
   */
  cargarOrdenes(): void {
    this.ordenes = this.datosService.getOrders();
  }

  /**
   * Obtiene el estilo según el estado de la orden
   */
  getStatusClass(status: Order['status']): string {
    const statusClasses: Record<Order['status'], string> = {
      'pending': 'badge-warning',
      'completed': 'badge-success',
      'cancelled': 'badge-danger'
    };
    return statusClasses[status];
  }
}
