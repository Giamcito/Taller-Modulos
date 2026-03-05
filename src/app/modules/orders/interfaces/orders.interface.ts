export interface Order {
  id: number;
  orderNumber: string;
  customerName: string;
  total: number;
  date: string;
  status: 'pending' | 'completed' | 'cancelled';
}