import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pack } from '../../interfaces/packs.interface';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class TablaComponent implements OnInit {
  packs: Pack[] = [];
  displayedColumns: (keyof Pack)[] = ['id', 'name', 'description', 'itemCount', 'price', 'discount'];

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.cargarPacks();
  }

  /**
   * Carga todos los packs desde el servicio
   */
  cargarPacks(): void {
    this.packs = this.datosService.getPacks();
  }

  /**
   * Calcula el precio final con descuento
   */
  getDiscountedPrice(pack: Pack): number {
    return pack.price * (1 - pack.discount / 100);
  }
}
