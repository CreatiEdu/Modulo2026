InmoSmart - Sistema Web para Gestión Inmobiliaria

Descripción

InmoSmart es una aplicación web desarrollada para optimizar la gestión de propiedades inmobiliarias y mejorar la experiencia de los usuarios que buscan alquilar o comprar inmuebles.

El sistema permite visualizar propiedades, aplicar filtros avanzados, postularse a inmuebles, adjuntar documentación requerida, coordinar visitas y gestionar el proceso completo desde la consulta hasta la entrega del inmueble.



Objetivo

Digitalizar y automatizar el proceso inmobiliario, facilitando:

- La búsqueda eficiente de inmuebles para los usuarios
- La gestión centralizada de propiedades para la inmobiliaria
- La automatización de postulaciones, aprobaciones y visitas



Funcionalidades Principales

Búsqueda de inmuebles

- Filtros por:
  - Tipo de operación (alquiler / venta)
  - Tipo de inmueble (casa / departamento)
  - Cantidad de habitaciones
  - Características (cochera, patio, etc.)
- Visualización de:
  - Fotos
  - Descripción detallada
  - Precio y ubicación

Postulación a inmuebles

- Visualización de requisitos y garantías
- Envío de solicitud
- Adjuntar documentación requerida
- Seguimiento del estado:
  - Pendiente
  - En revisión
  - Aprobado
  - Rechazado

 Gestión de visitas

- Selección de horarios disponibles
- Reserva de turnos
- Confirmación de visitas

Notificaciones

- Confirmación de postulación
- Estado de aprobación
- Avisos de visitas
- Notificación final para firma y entrega de llave

Panel administrativo

- Alta, edición y eliminación de inmuebles
- Gestión de solicitudes
- Aprobación o rechazo de postulantes
- Administración de horarios de visitas
- Visualización de documentación



Especificación de Requerimientos

Requerimientos Funcionales (RF)

**RF1 - Búsqueda de inmuebles:**  
El sistema debe permitir a los usuarios buscar inmuebles mediante filtros como tipo de operación (Venta / alquiler), tipo de inmueble y características específicas (cantidad de habitaciones, ubicación y rango de precio).
Actor: Usuario
Prioridad: Must
Criterio de verificación: El sistema debe mostrar únicamente los inmuebles que coincidan con los filtros seleccionados por el usuario y actualizar los resultados en menos de 3 segundos bajo las condiciones normales de uso.


**RF2 - Visualización de propiedades:**  
El sistema debe permitir al usuario visualizar la información detallada de un inmueble seleccionando, incluyendo galería de imágenes, descripción, precio, requisitos y ubicación geográfica mediante un mapa interactivo.
Actor: Usuario
Prioridad: Must
Criterio de aceptación: El sistema debe mostrar correctamente toda la información asociada al inmueble seleccionado sin omitir campos obligatorios ni presentar errores de carga.

**RF3 - Postulación a inmuebles:**  
El sistema debe permitir al usuario confirmar su postulación para adquirir o alquilar  un inmueble y adjuntar la documentación requerida para su evaluación. 
Actor: Usuario
Prioridad: Must
Criterio de aceptación: El sistema debe almacenar correctamente la  confirmación de postulación, los archivos adjuntos asociados al usuario y al inmueble seleccionado.

**RF4 - Gestión de visitas:**  
El sistema debe permitir a los usuarios agendar visitas seleccionando horarios disponibles.

**RF5 - Administración de inmuebles:**  
El sistema debe permitir al administrador crear, editar y eliminar propiedades dentro del sistema.


Requerimientos No Funcionales (RNF)

**RNF1 - Seguridad:**  
 El sistema debe proteger la información personal y documentación cargada por los usuarios mediante autenticación segura, almacenamiento cifrado de contraseñas y sanitizar (limpieza de caracteres peligrosos) los contenidos para evitar ataques de inyección de código .
Métrica: Las contraseñas deben almacenarse utilizando algoritmo bcrypt con factor de costo mínimo de 10.
Prioridad: Alta
Método de aceptación: Auditoría de base de datos y revisión de código de autenticación.

**RNF2 - Disponibilibidad del sistema:**  
 El sistema debe mantener una disponibilidad mínima del 99% mensual, excluyendo períodos de mantenimiento programado. 
Métrica: Disponibilidad mensual igual o superior al 99%. 
Prioridad: Alta
Método de aceptación: Monitoreo continuo mediante herramientas de uptime y registros del servidor

**RNF3 - Usabilidad:**  
El sistema debe contar con una interfaz intuitiva, fácil de usar y accesible para todo tipo de usuario.



Tipos de usuario

- **Usuario (cliente):**
  - Busca inmuebles
  - Se postula
  - Adjunta documentación
  - Agenda visitas

- **Administrador (inmobiliaria):**
  - Gestiona propiedades
  - Revisa solicitudes
  - Administra visitas
  - Controla el proceso completo



Tecnologías utilizadas

Frontend

- Angular
- TypeScript
- HTML5
- CSS3
- Bootstrap

Backend

- Python
- Django
- Django REST Framework (DRF)

Base de datos

- MySQL

Configuración y seguridad

- Variables de entorno (.env)

Herramientas de desarrollo

- Git
- GitHub

## Instalación y ejecución del Frontend

1. Ingresar a la carpeta frontend: cd frontend

2. Instalar dependencias: npm install

3. Ejecutar servidor Angular: ng serve

4. Abrir en navegador: http://localhost:4200


## Instalación y ejecución del Backend

1. Clonar el repositorio: git clone URL_DEL_REPOSITORIO

2. Ingresar a la carpeta backend: cd backend

3. Crear entorno virtual: python -m venv venv

4. Activar entorno virtual: Windows: venv\Scripts\activate

5. Instalar dependencias: pip install -r requirements.txt

6. Ejecutar migraciones: python manage.py migrate

7. Iniciar servidor: python manage.py runserver


Flujo del sistema

1. El usuario accede a la plataforma
2. Busca propiedades mediante filtros
3. Visualiza detalles del inmueble
4. Consulta requisitos y garantías
5. Envía su postulación
6. Adjunta documentación requerida
7. La inmobiliaria revisa la solicitud
8. Se notifica al usuario el resultado
9. Si es aprobado, agenda una visita
10. Recibe confirmación y seguimiento
11. Finaliza con firma y entrega del inmueble



Estado del proyecto

 En desarrollo  
Actualmente se encuentra en etapa de construcción del MVP (Producto Mínimo Viable)



 Próximas mejoras

- Sistema de notificaciones en tiempo real
- Integración con correo electrónico
- Panel administrativo avanzado
- Historial completo de operaciones
- Optimización de UX/UI



Equipo de esarrollo

- Michael David Farias
- Dolores Fernández Rubio
- Franco Fernández Rubio
- Matías Rodríguez Valenzuela
- Alejandro Gariglio
- Matías Eric Astrada

---
