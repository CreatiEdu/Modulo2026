import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-dashboard-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-usuario.html',
  styleUrl: './dashboard-usuario.css'
})
export class DashboardUsuario implements OnInit {

  usuario = {
    nombre: '',
    email: ''
  };

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const userStorage = JSON.parse(localStorage.getItem('user') || '{}'); 

    if (userStorage && userStorage.nombre) {
      this.usuario.nombre = userStorage.nombre;
      this.usuario.email = userStorage.email;
    } else {
      this.usuario.nombre = 'Invitado';
      this.usuario.email = '';
    }
  }
  
  favoritos = [
    { id: 1, titulo: 'Casa en venta', ubicacion: 'Córdoba Centro', precio: '$120.000 USD' },
    { id: 2, titulo: 'Departamento en alquiler', ubicacion: 'Nueva Córdoba', precio: '$350.000 ARS' },
  ];

  visitas = [
    { id: 1, propiedad: 'Casa en venta', fecha: '15/05/2026', hora: '10:00', estado: 'Confirmada' },
    { id: 2, propiedad: 'Departamento en alquiler', fecha: '18/05/2026', hora: '16:00', estado: 'Pendiente' },
  ];

  tramite = {
    propiedad: 'Departamento en alquiler',
    estado: 'En revisión',
    pasos: [
      { nombre: 'Solicitud enviada', completado: true },
      { nombre: 'Documentación en revisión', completado: true },
      { nombre: 'Aprobación del agente', completado: false },
      { nombre: 'Firma de contrato', completado: false },
    ]
  };

  documentos = [
    { nombre: 'DNI', estado: 'Cargado' },
    { nombre: 'Recibo de sueldo', estado: 'Cargado' },
    { nombre: 'Garantía', estado: 'Pendiente' },
  ];

}
