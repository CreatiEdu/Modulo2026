import { Routes } from '@angular/router';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Contacto } from './pages/contacto/contacto';
import { DashboardUsuario } from './pages/dashboard-usuario/dashboard-usuario';
import { DashboardAdmin } from './pages/dashboard-admin/dashboard-admin';
import { Pagina404 } from '../pages/pagina404/pagina404';
import { TerrenosLotes } from './pages/terrenos-lotes/terrenos-lotes';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'login', component: Login },
  { path: 'dashboard-usuario', component: DashboardUsuario },
  { path: 'dashboard-admin', component: DashboardAdmin },
  { path: 'contacto', component: Contacto },
  { path: 'terrenos-lotes', component: TerrenosLotes },

  // agregado de rutas
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Pagina404 }
];

