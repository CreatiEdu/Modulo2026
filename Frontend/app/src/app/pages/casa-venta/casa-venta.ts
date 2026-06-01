import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { PropiedadesService } from '../../services/propiedades';

@Component({
  selector: 'app-propiedades',
  standalone: true, 
  imports: [CommonModule, FormsModule, RouterLink], 
  templateUrl: './casa-venta.html',
  styleUrl: './casa-venta.css',
})
export class CasaVenta {
  
  constructor(
    private PropiedadeService: PropiedadesService
  ){}
  
  get propiedad(){
    return this.PropiedadeService.propiedades;
  }

  textoBusqueda = '';
  localidadSeleccionada = '';
  precioMinimo: number | null = null;
  precioMaximo: number | null = null;

  get localidades() {
    const soloCasasVenta = this.propiedad.filter(p => 
      p.operacion === 'Venta' && 
      !p.titulo.toLowerCase().includes('terreno') && 
      !p.titulo.toLowerCase().includes('lote')
    );
    return [...new Set(soloCasasVenta.map(p => p.localidad))];
  }

  get propiedadesFiltradas() {
    return this.propiedad.filter(p => {
      const esVenta = p.operacion === 'Venta';
      const NOesTerreno = !p.titulo.toLowerCase().includes('terreno') && !p.titulo.toLowerCase().includes('lote');
      const coincideTexto = p.titulo.toLowerCase().includes(this.textoBusqueda.toLowerCase());
      const coincideLocalidad = !this.localidadSeleccionada || p.localidad === this.localidadSeleccionada;
      const cumplePrecioMin = !this.precioMinimo || p.precio >= this.precioMinimo;
      const cumplePrecioMax = !this.precioMaximo || p.precio <= this.precioMaximo;

      return esVenta && NOesTerreno && coincideTexto && coincideLocalidad && cumplePrecioMin && cumplePrecioMax;
    });
  }
}