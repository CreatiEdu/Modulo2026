import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropiedadesService } from '../../services/propiedades';
import { AuthService } from '../../services/AuthService';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalle-propiedad',
  imports: [RouterModule],
  templateUrl: './detalle-propiedad.html',
  styleUrl: './detalle-propiedad.css',
})
export class DetallePropiedad {
  
  propiedad: any;
  imagenActual ='';
  id = 0;
  constructor(
    private route :ActivatedRoute,
    private PropiiedadesService: PropiedadesService,
    public authService: AuthService,
  ) {
    
    const id =Number (
      this.route.snapshot.paramMap.get('id')
    );
    
    this.propiedad = 
      this.PropiiedadesService.obtenerPorId(id);

    if(this.propiedad){

      this.imagenActual =
        this.propiedad.imagenes[0];
      }
  }
}
