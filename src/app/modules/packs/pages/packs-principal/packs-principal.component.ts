import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-packs-principal',
  templateUrl: './packs-principal.component.html',
  styleUrl: './packs-principal.component.scss',
  standalone: true,
  imports: [CommonModule, TablaComponent]
})
export class PacksPrincipalComponent {
  title: string = 'Gestión de Paquetes';
  description: string = 'Sistema de administración de paquetes de productos';
}
