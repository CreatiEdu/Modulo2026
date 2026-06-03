import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PropiedadesService } from '../../services/propiedades';

@Component({
  selector: 'app-propiedades',
  imports: [FormsModule, RouterLink],
  templateUrl: './terrenos-lotes.html',
  styleUrl: './terrenos-lotes.css',
})
export class TerrenosLotes {

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
    return [...new Set(
      this.propiedad.map(p => p.localidad)
    )];
  }

  get terrenosFiltrados() {

    return this.propiedad.filter(p => {

      const terreno =
        p.tipo === 'Terreno';

      const texto =
        p.titulo.toLowerCase()
          .includes(this.textoBusqueda.toLowerCase());

      const localidad =
        !this.localidadSeleccionada ||
        p.localidad === this.localidadSeleccionada;

      const cumplePrecioMin =
        this.precioMinimo == null
          ? true
          : p.precio >= this.precioMinimo;

      const cumplePrecioMax =
        this.precioMaximo == null
          ? true
          : p.precio <= this.precioMaximo;

      return (
        terreno &&
        texto &&
        localidad &&
        cumplePrecioMin &&
        cumplePrecioMax
      );
    });

  }
}