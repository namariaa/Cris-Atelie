import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.components';
import { DetalharComponent } from './pages/Produto/detalhar/detalhar.component';

export const routes: Routes = [
    {
        path: ":id",
        component: DetalharComponent
    }
];
