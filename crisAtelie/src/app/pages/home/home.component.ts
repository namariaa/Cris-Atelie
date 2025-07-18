import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.components';
import { ModalComponent } from '../../components/modal/modal.components';

@Component({
  selector: 'app-home',
  imports: [CardComponent, ModalComponent],
  standalone:true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
