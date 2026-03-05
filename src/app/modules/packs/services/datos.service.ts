import { Injectable } from '@angular/core';
import { PACKS } from '../../../core/config/packs.config';
import { Pack } from '../interfaces/packs.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  /**
   * Obtiene todos los packs
   * @returns {Pack[]} Array de packs
   */
  getPacks(): Pack[] {
    return PACKS;
  }

  /**
   * Obtiene un pack por ID
   * @param {number} id - ID del pack
   * @returns {Pack | undefined} El pack encontrado o undefined
   */
  getPackById(id: number): Pack | undefined {
    return PACKS.find(pack => pack.id === id);
  }

  /**
   * Crea un nuevo pack
   * @param {Pack} pack - Datos del nuevo pack
   * @returns {Pack} El pack creado
   */
  createPack(pack: Pack): Pack {
    const newPack = { ...pack, id: PACKS.length + 1 };
    PACKS.push(newPack);
    return newPack;
  }

  /**
   * Actualiza un pack existente
   * @param {number} id - ID del pack
   * @param {Partial<Pack>} updatedPack - Campos a actualizar
   * @returns {Pack | undefined} El pack actualizado o undefined
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
   * Elimina un pack
   * @param {number} id - ID del pack
   * @returns {boolean} true si se eliminó, false si no existe
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
