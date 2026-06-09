import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PropiedadesService } from '../../services/propiedades';

@Component({
  selector: 'app-crear-propiedad',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-propiedad.html',
  styleUrl: './crear-propiedad.css',
})
export class CrearPropiedad {
  imagenesSeleccionadas: File[] = [];

  constructor(
    private propiedadesService: PropiedadesService,
    private router: Router
  ) {}

  onFileChange(event: any) {
    const files = event.target.files;
    if (files) {
      this.imagenesSeleccionadas = Array.from(files);
      console.log('Imágenes seleccionadas:', this.imagenesSeleccionadas);
    }
  }

  onSubmit(form: any) {
    if (form.valid) {
      const data = {
        titulo: form.value.titulo,
        descripcion: `${form.value.descripcion}\nDirección: ${form.value.direccion}`,
        precio: form.value.precio,
        habitaciones: 3, // defaults for demonstration
        baños: 2,
        superficie: 120.0,
        acepta_mascotas: true,
        id_tipo: 1, // Casa
        id_estado: form.value.disponible ? 1 : 2,
        id_Gestor: 1
      };

      this.propiedadesService.crearPropiedad(data).subscribe({
        next: (response) => {
          alert('Inmueble publicado correctamente en la base de datos!');
          this.router.navigate(['/propiedades']);
        },
        error: (error) => {
          console.error('Error al publicar inmueble', error);
          if (error.status === 401 || error.status === 403) {
            alert('No tienes permisos de administrador para realizar esta acción. Debes iniciar sesión como Gestor o Administrador.');
          } else {
            alert('Ocurrió un error al publicar el inmueble.');
          }
        }
      });
    }
  }
}