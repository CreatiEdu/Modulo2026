import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quienes-somos.html',
  styleUrl: './quienes-somos.css'
})
export class QuienesSomosComponent {

 equipo = [
    { nombre: 'Michael Farias', rol: 'Agente Inmobiliario', iniciales: 'MF', foto: 'assets/equipo/Michael.png' },
    { nombre: 'Matias Astrada', rol: 'Agente Inmobiliario', iniciales: 'MA', foto: 'assets/equipo/Matias-a.jpg' },
    { nombre: 'Franco Fernández', rol: 'Agente Inmobiliario', iniciales: 'FF', foto: 'assets/equipo/Franco.jpg' },
    { nombre: 'Matias Rodriguez', rol: 'Agente Inmobiliario', iniciales: 'MR', foto: 'assets/equipo/Matias-R.jpg' },
    { nombre: 'Dolores Fernández', rol: 'Agente Inmobiliaria', iniciales: 'DF', foto: 'assets/equipo/dolores.jpg' },
    { nombre: 'Alejandro Gariglio', rol: 'Agente Inmobiliario', iniciales: 'AG', foto: 'assets/equipo/Alejandro.jpg' },
  ];

}
