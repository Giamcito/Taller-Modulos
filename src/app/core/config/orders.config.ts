import { Order } from "../../modules/orders/interfaces/orders.interface";

/**
 * Listado de órdenes disponibles en el sistema.
 * 
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de órdenes.
 *
 * @type {Order[]}
 */
export const ORDERS: Order[] = [
  {
    id: 1,
    orderNumber: 'ORD-001',
    customerName: 'Juan Pérez',
    total: 150000,
    date: '2024-03-01',
    status: 'completed'
  },
  {
    id: 2,
    orderNumber: 'ORD-002',
    customerName: 'María García',
    total: 220000,
    date: '2024-03-02',
    status: 'pending'
  },
  {
    id: 3,
    orderNumber: 'ORD-003',
    customerName: 'Carlos López',
    total: 85000,
    date: '2024-03-03',
    status: 'completed'
  },
  {
    id: 4,
    orderNumber: 'ORD-004',
    customerName: 'Ana Rodríguez',
    total: 330000,
    date: '2024-03-04',
    status: 'cancelled'
  }
];