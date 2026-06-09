import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PropiedadesService {
  public propiedades: any[] = [];
  private propiedadesSubject = new BehaviorSubject<any[]>([]);
  public propiedades$ = this.propiedadesSubject.asObservable();

  private apiUrl = 'http://127.0.0.1:8000/api/propiedades/';

  constructor(private http: HttpClient) {
    this.cargarPropiedades().subscribe();
  }

  cargarPropiedades(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => data.map(p => this.mapProperty(p))),
      tap(mapped => {
        this.propiedades = mapped;
        this.propiedadesSubject.next(mapped);
      })
    );
  }

  obtenerPorId(id: number): any {
    // Sync fallback for existing detail page code
    const found = this.propiedades.find(p => p.id === id);
    if (found) return found;

    // Return a mock structure or we can load it async
    return null;
  }

  obtenerPorIdAsync(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}/`).pipe(
      map(p => this.mapProperty(p))
    );
  }

  crearPropiedad(propiedadData: any): Observable<any> {
    // Map frontend property structure back to Django structure
    const DjangoData = {
      titulo: propiedadData.titulo,
      descripcion: propiedadData.descripcion,
      precio: propiedadData.precio.toString(),
      habitaciones: propiedadData.habitaciones || 3,
      baños: propiedadData.baños || 2,
      superficie: propiedadData.superficie || 120.0,
      acepta_mascotas: propiedadData.acepta_mascotas || false,
      id_tipo: propiedadData.id_tipo || 1,
      id_estado: propiedadData.id_estado || 1,
      id_Gestor: propiedadData.id_Gestor || 1
    };

    return this.http.post<any>(this.apiUrl, DjangoData).pipe(
      tap(() => this.cargarPropiedades().subscribe())
    );
  }

  private mapProperty(p: any): any {
    const tiposMap: Record<number, string> = {
      1: 'Casa',
      2: 'Departamento',
      3: 'Local',
      4: 'Terreno'
    };

    const gestoresMap: Record<number, { agente: string, telefono: string, email: string }> = {
      1: { agente: 'Carlos Mendez', telefono: '+54 358 4821045', email: 'carlosmendez@gmail.com' },
      2: { agente: 'Laura Gimenez', telefono: '+54 358 4920318', email: 'lauragimenez@gmail.com' },
      3: { agente: 'Roberto Silva', telefono: '+54 358 4000001', email: 'admin@inmosmart.com' }
    };

    const gestorInfo = gestoresMap[p.id_Gestor] || gestoresMap[1];

    // Infer operation: if state is 4 (Alquilado) or price is rent-like or title contains alquiler
    let operacion = 'Venta';
    if (p.id_estado === 4 || p.titulo.toLowerCase().includes('alquiler') || p.titulo.toLowerCase().includes('monoambiente')) {
      operacion = 'Alquiler';
    }

    // Default images if not set
    let imagenes = [
      'assets/propiedades/casa-familiar.jpg'
    ];
    
    // Check if backend provided image URLs or files
    if (p.imagen_1) {
      imagenes = [p.imagen_1];
      if (p.imagen_2) imagenes.push(p.imagen_2);
      if (p.imagen_3) imagenes.push(p.imagen_3);
    } else {
      // Map based on type
      if (p.id_tipo === 2) {
        imagenes = ['assets/propiedades/Departamento.jpg'];
      } else if (p.id_tipo === 4) {
        imagenes = ['assets/propiedades/terreno.jpg'];
      }
    }

    // Infer location from title or use default
    let localidad = 'Córdoba';
    if (p.titulo.toLowerCase().includes('allende')) {
      localidad = 'Villa Allende';
    } else if (p.titulo.toLowerCase().includes('higueras')) {
      localidad = 'Las Higueras';
    } else if (p.titulo.toLowerCase().includes('rosario')) {
      localidad = 'Rosario';
    } else if (p.titulo.toLowerCase().includes('alberdi')) {
      localidad = 'Alberdi';
    } else if (p.titulo.toLowerCase().includes('banda norte')) {
      localidad = 'Banda Norte';
    }

    return {
      id: p.id_propiedad,
      titulo: p.titulo,
      agente: gestorInfo.agente,
      telefono: gestorInfo.telefono,
      email: gestorInfo.email,
      tipo: tiposMap[p.id_tipo] || 'Casa',
      operacion: operacion,
      localidad: localidad,
      metros: parseFloat(p.superficie) || 120,
      dormitorios: p.habitaciones || 0,
      baños: p.baños || 1,
      precio: parseFloat(p.precio),
      imagenes: imagenes,
      descripcion: p.descripcion,
      aceptaMascotas: p.acepta_mascotas
    };
  }
}
