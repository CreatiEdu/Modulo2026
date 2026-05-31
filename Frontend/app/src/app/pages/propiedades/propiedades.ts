import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { PropiedadesService } from '../../services/propiedades';

@Component({
  selector: 'app-propiedades',
  imports: [FormsModule, RouterLink],
  templateUrl: './propiedades.html',
  styleUrl: './propiedades.css',
})
export class Propiedades {
  
  constructor(
    private PropiedadeService: PropiedadesService
  ){}
  
  get propiedad(){
    return this.PropiedadeService.propiedades
  }

  textoBusqueda = '';

  operacionSeleccionada = '';

  localidadSeleccionada = '';

  precioMinimo : number | null = null ;
  precioMaximo : number | null = null;

  get localidades() {

  return [...new Set(
    this.propiedad.map(p => p.localidad)
  )];

}

  get propiedadesFiltradas() {

  return this.propiedad.filter(p => {

    const texto =
      p.titulo.toLowerCase()
      .includes(this.textoBusqueda.toLowerCase());

    const operacion =
      !this.operacionSeleccionada ||
      p.operacion === this.operacionSeleccionada;

    const localidad =
      !this.localidadSeleccionada ||
      p.localidad.toLowerCase().includes(this.localidadSeleccionada.toLowerCase());

    const cumplePrecioMin = 
      this.precioMinimo === null || this.precioMinimo === undefined || this.precioMinimo === '' as any
        ? true 
        : p.precio >= this.precioMinimo;
    
    const cumplePrecioMax = 
      this.precioMaximo === null || this.precioMaximo === undefined || this.precioMaximo === '' as any
        ? true 
        : p.precio <= this.precioMaximo;

   
    return texto && operacion && localidad && cumplePrecioMin && cumplePrecioMax;
  });
}

}


