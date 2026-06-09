import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contacto {

  formulario = {
    nombre: '',
    telefono: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  enviarFormulario() {
    this.http.post(
      'http://127.0.0.1:8000/api/contacto/',
      this.formulario
    ).subscribe({
      next: (respuesta) => {
        console.log('Consulta enviada', respuesta);
        alert('Consulta enviada con éxito');
        this.formulario = {
          nombre: '',
          telefono: '',
          email: '',
          asunto: '',
          mensaje: ''
        };
      },
      error: (error) => {
        console.error('Error al enviar', error);
        alert('Ocurrió un error al enviar la consulta');
      }
    });
  }
}