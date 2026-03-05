import { Pack } from "../../modules/packs/interfaces/packs.interface";

/**
 * Listado de paquetes disponibles en el sistema.
 * 
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de paquetes.
 *
 * @type {Pack[]}
 */
export const PACKS: Pack[] = [
  {
    id: 1,
    name: 'Pack Básico',
    description: 'Paquete con productos esenciales',
    itemCount: 5,
    price: 50000,
    discount: 0
  },
  {
    id: 2,
    name: 'Pack Premium',
    description: 'Paquete con productos seleccionados',
    itemCount: 10,
    price: 120000,
    discount: 10
  },
  {
    id: 3,
    name: 'Pack Deluxe',
    description: 'Paquete completo con todos los productos',
    itemCount: 20,
    price: 250000,
    discount: 20
  },
  {
    id: 4,
    name: 'Pack Familiar',
    description: 'Paquete ideal para familias',
    itemCount: 15,
    price: 180000,
    discount: 15
  }
];