import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  templateUrl: './dashboard-admin.html',
  styleUrl: './dashboard-admin.css'
})
export class DashboardAdmin {

  metricas = [
    { label: 'Propiedades activas', valor: 48 },
    { label: 'Usuarios registrados', valor: 124 },
    { label: 'Visitas este mes', valor: 37 },
    { label: 'Contratos firmados', valor: 12 },
  ];

  usuarios = [
    { nombre: 'Juan Pérez', email: 'juan@email.com', rol: 'Usuario', estado: 'Activo' },
    { nombre: 'María López', email: 'maria@email.com', rol: 'Usuario', estado: 'Activo' },
    { nombre: 'Carlos Ruiz', email: 'carlos@email.com', rol: 'Agente', estado: 'Activo' },
    { nombre: 'Ana Gómez', email: 'ana@email.com', rol: 'Usuario', estado: 'Inactivo' },
  ];

  propiedades = [
    { titulo: 'Casa en venta', ubicacion: 'Córdoba Centro', estado: 'Disponible' },
    { titulo: 'Departamento en alquiler', ubicacion: 'Nueva Córdoba', estado: 'Reservado' },
    { titulo: 'Local comercial', ubicacion: 'General Paz', estado: 'Disponible' },
  ];

}
