import { Injectable } from '@angular/core';
import { ORDERS } from '../../../core/config/orders.config';
import { Order } from '../interfaces/orders.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  /**
   * Obtiene todas las órdenes
   */
  getOrders(): Order[] {
    return ORDERS;
  }

  /**
   * Obtiene una orden por ID
   */
  getOrderById(id: number): Order | undefined {
    return ORDERS.find(order => order.id === id);
  }

  /**
   * Crea una nueva orden (simulado)
   */
  createOrder(order: Order): Order {
    const newOrder = { ...order, id: ORDERS.length + 1 };
    ORDERS.push(newOrder);
    return newOrder;
  }

  /**
   * Actualiza una orden (simulado)
   */
  updateOrder(id: number, updatedOrder: Partial<Order>): Order | undefined {
    const order = ORDERS.find(o => o.id === id);
    if (order) {
      Object.assign(order, updatedOrder);
      return order;
    }
    return undefined;
  }

  /**
   * Elimina una orden (simulado)
   */
  deleteOrder(id: number): boolean {
    const index = ORDERS.findIndex(o => o.id === id);
    if (index > -1) {
      ORDERS.splice(index, 1);
      return true;
    }
    return false;
  }
}
