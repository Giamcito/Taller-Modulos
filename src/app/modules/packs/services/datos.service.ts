import { Injectable } from '@angular/core';
import { PACKS } from '../../../core/config/packs.config';
import { Pack } from '../interfaces/packs.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  /**
   * Obtiene todos los paquetes
   */
  getPacks(): Pack[] {
    return PACKS;
  }

  /**
   * Obtiene un paquete por ID
   */
  getPackById(id: number): Pack | undefined {
    return PACKS.find(pack => pack.id === id);
  }

  /**
   * Crea un nuevo paquete (simulado)
   */
  createPack(pack: Pack): Pack {
    const newPack = { ...pack, id: PACKS.length + 1 };
    PACKS.push(newPack);
    return newPack;
  }

  /**
   * Actualiza un paquete (simulado)
   */
  updatePack(id: number, updatedPack: Partial<Pack>): Pack | undefined {
    const pack = PACKS.find(p => p.id === id);
    if (pack) {
      Object.assign(pack, updatedPack);
      return pack;
    }
    return undefined;
  }

  /**
   * Elimina un paquete (simulado)
   */
  deletePack(id: number): boolean {
    const index = PACKS.findIndex(p => p.id === id);
    if (index > -1) {
      PACKS.splice(index, 1);
      return true;
    }
    return false;
  }
}
