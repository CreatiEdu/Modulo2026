import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PropiedadesService {

  propiedades = [

    {
      id: 1,
      titulo: 'Casa Nueva Córdoba',
      agente:'Michael Jackson',
      telefono:'+54 351 1234567',
      email:'ejemplo513@gmail.com',
      tipo: 'Casa',
      operacion: 'Venta',
      localidad: 'Córdoba',
      metros: 120,
      dormitorios: 3,
      precio: 120000,
      imagenes: [
        'assets/propiedades/casa-familiar.jpg',
        'assets/propiedades/casa-familiar-baño.jpg',
        'assets/propiedades/casa-familiar-comedor.jpg',
      ],

      descripcion: 'Hermosa casa ubicada en Nueva Córdoba con amplio patio y cochera.'
    },

    {
      id: 2,
      titulo: 'Departamento Centro',
      agente:'Tim payne',
      telefono:'+54 351 1234567',
      email:'ejemplo513@gmail.com',
      tipo: 'Departamento',
      operacion: 'Alquiler',
      localidad: 'Córdoba',
      metros: 80,
      dormitorios: 2,
      precio: 350000,
      imagenes: [
        'assets/propiedades/Departamento.jpg',
        'assets/propiedades/Departamento-cocina.jpg',
        'assets/propiedades/Departamento-baño.jpg'
      ],
      descripcion: 'Departamento céntrico cercano a comercios y transporte público.'
    },

    {
      id: 3,
      titulo: 'Terreno Villa Allende',
      agente:'Ricardo Lorio',
      telefono:'+54 351 1234567',
      email:'ejemplo513@gmail.com',
      tipo: 'Terreno',
      operacion: 'Venta',
      localidad: 'Villa Allende',
      metros: 600,
      dormitorios: 0,
      precio: 7500000,
      imagenes: ['/assets/propiedades/terreno.jpg'],
      descripcion: 'Terreno amplio ideal para desarrollo residencial.'
    },

    {
      id: 4,
      titulo: 'Alquiler de 2 ambientes',
      agente:'Mariano Martinez',
      telefono:'+54 351 1234567',
      email:'ejemplo513@gmail.com',
      tipo: 'Departamento',
      operacion: 'Alquiler',
      localidad: 'Rosario',
      metros: 70,
      dormitorios: 1,
      precio: 1000000,
      imagenes: [
        '/assets/propiedades/alquiler-de-2-ambientes.jpg',
        '/assets/propiedades/alquiler-de-2-ambientes-cocina.jpg',
        '/assets/propiedades/alquiler-de-2-ambientes-habitación.jpg',
        '/assets/propiedades/alquiler-de-2-ambientes-baño.jpg',
      ],
      descripcion: `Departamento de distribución funcional que cuenta con una cocina comedor diario equipada con conexión para lavarropas. 
        Dispone de un dormitorio y un baño completoLa unidad tiene salida a un patio privado que conecta con un quincho propio.`
    },

    {
      id: 5,
      titulo: 'ALQUILER  MONOAMBIENTE AMOBLADO',
      agente:'Ricardo Iorio',
      telefono:'+54 351 1234567',
      email:'ejemplo513@gmail.com',
      tipo: 'Departamento',
      operacion: 'Alquiler',
      localidad: 'Córdoba',
      metros: 180,
      dormitorios: 1,
      precio: 850000,
      imagenes: [
        '/assets/propiedades/alquiler-monoambiente-amoblado.jpg',
        '/assets/propiedades/alquiler-monoambiente-amoblado-general.jpg',
        '/assets/propiedades/alquiler-monoambiente-amoblado-cocina.jpg',
        '/assets/propiedades/alquiler-monoambiente-amoblado-baño.jpg',
      ],
      descripcion: `Características del departamento:
      Amplio ambiente con salida directa al balcón.
      Baño completo.
      Pisos flotantes de calidad.
      Calefacción individual.
      Aire acondicionado instalado.`
    },

  ];

  obtenerPorId(id: number){
    return this.propiedades.find(
       p => p.id === id
    )
  }
}
