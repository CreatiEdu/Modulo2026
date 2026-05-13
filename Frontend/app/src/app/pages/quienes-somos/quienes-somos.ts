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
    { nombre: 'Michael Farias', rol: 'Frontend Developer', iniciales: 'MF' },
    { nombre: 'Matias Astrada', rol: 'Frontend Developer', iniciales: 'MA' },
    { nombre: 'Franco Fernández', rol: 'Backend Developer', iniciales: 'FF' },
    { nombre: 'Matias Rodriguez', rol: 'Backend Developer', iniciales: 'MR' },
    { nombre: 'Dolores Fernández', rol: 'Documentación', iniciales: 'DF' },
    { nombre: 'Alejandro Gariglio', rol: 'Documentación', iniciales: 'AG' },
  ];

}
