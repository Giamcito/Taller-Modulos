/**
 * Interfaz que define la estructura de una Orden
 *
 * @interface Order
 * @property {number} id - Identificador único de la orden
 * @property {string} orderNumber - Número de orden
 * @property {string} customerName - Nombre del cliente
 * @property {number} total - Monto total de la orden
 * @property {string} date - Fecha de la orden (formato YYYY-MM-DD)
 * @property {OrderStatus} status - Estado de la orden
 */
export interface Order {
  id: number;
  orderNumber: string;
  customerName: string;
  total: number;
  date: string;
  status: OrderStatus;
}

/**
 * Tipos permitidos para el estado de una orden
 */
export type OrderStatus = 'pending' | 'completed' | 'cancelled';