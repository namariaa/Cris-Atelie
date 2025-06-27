import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.components';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, ModalComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Cria ateliê';

}

