/**
 * Interfaz que define la estructura de un Pack
 *
 * @interface Pack
 * @property {number} id - Identificador único del pack
 * @property {string} name - Nombre del pack
 * @property {string} description - Descripción del pack
 * @property {number} itemCount - Cantidad de artículos en el pack
 * @property {number} price - Precio del pack
 * @property {number} discount - Descuento aplicado (en porcentaje)
 */
export interface Pack {
  id: number;
  name: string;
  description: string;
  itemCount: number;
  price: number;
  discount: number;
}