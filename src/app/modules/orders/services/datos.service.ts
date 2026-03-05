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
   * @returns {Order[]} Array de órdenes
   */
  getOrders(): Order[] {
    return ORDERS;
  }

  /**
   * Obtiene una orden por ID
   * @param {number} id - ID de la orden
   * @returns {Order | undefined} La orden encontrada o undefined
   */
  getOrderById(id: number): Order | undefined {
    return ORDERS.find(order => order.id === id);
  }

  /**
   * Crea una nueva orden
   * @param {Order} order - Datos de la nueva orden
   * @returns {Order} La orden creada
   */
  createOrder(order: Order): Order {
    const newOrder = { ...order, id: ORDERS.length + 1 };
    ORDERS.push(newOrder);
    return newOrder;
  }

  /**
   * Actualiza una orden existente
   * @param {number} id - ID de la orden
   * @param {Partial<Order>} updatedOrder - Campos a actualizar
   * @returns {Order | undefined} La orden actualizada o undefined
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
   * Elimina una orden
   * @param {number} id - ID de la orden
   * @returns {boolean} true si se eliminó, false si no existe
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
