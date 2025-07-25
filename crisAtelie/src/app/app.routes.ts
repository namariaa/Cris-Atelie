import { Routes } from '@angular/router';
import { DetalharComponent } from './pages/Produto/detalhar/detalhar.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: ':id',
    component: DetalharComponent,
  },
];

export default routes;
