import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-propiedad',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-propiedad.html',
  styleUrl: './crear-propiedad.css',
})
export class CrearPropiedad {
  imagenesSeleccionadas: File[] = [];

  onFileChange(event: any) {
  const files = event.target.files;
  if (files) {

    this.imagenesSeleccionadas =
      Array.from(files);
    console.log(
      'Imágenes seleccionadas:',
      this.imagenesSeleccionadas
    );
  }
}

  onSubmit(form: any) {

  if (form.valid) {

    console.log('Datos del inmueble:');
    console.log(form.value);
    console.log('Imágenes:',
    this.imagenesSeleccionadas
    );

    alert('Inmueble cargado correctamente (modo demostración)');
  }
  
}
}