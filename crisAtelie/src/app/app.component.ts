import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.components';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Cria ateliê';

}

