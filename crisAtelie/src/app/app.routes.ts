import { Routes } from '@angular/router';
import { DetalharComponent } from './pages/Produto/detalhar/detalhar.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':id',
    component: DetalharComponent,
  },
];

export default routes;
