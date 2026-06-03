import { Routes } from '@angular/router';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Contacto } from './pages/contacto/contacto';
import { CrearPropiedad } from './pages/crear-propiedad/crear-propiedad';
import { Propiedades } from './pages/propiedades/propiedades';
import { Alquileres } from './pages/alquileres/alquileres';
import { DetallePropiedad } from './pages/detalle-propiedad/detalle-propiedad';
import { DashboardUsuario } from './pages/dashboard-usuario/dashboard-usuario';
import { DashboardAdmin } from './pages/dashboard-admin/dashboard-admin';
import { Pagina404 } from '../pages/pagina404/pagina404';
import { CasaVenta } from './pages/casa-venta/casa-venta';
import { TerrenosLotes } from './pages/terrenos-lotes/terrenos-lotes';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'login', component: Login },
  { path: 'register',component: Register},
  { path: 'dashboard-usuario', component: DashboardUsuario },
  { path: 'dashboard-admin', component: DashboardAdmin },
  { path: 'contacto', component: Contacto },
  { path: 'propiedades', component: Propiedades},
  { path: 'crear-propiedad', component: CrearPropiedad},
  { path: 'propiedad/:id', component: DetallePropiedad},
  { path: 'alquileres', component:Alquileres},
  { path: 'casas-venta', component: CasaVenta },
  { path: 'terrenos-lotes', component: TerrenosLotes },

  // agregado de rutas
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Pagina404 }
];

