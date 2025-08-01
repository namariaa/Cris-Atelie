import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.components';
import { ModalComponent } from '../../components/modal/modal.components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CardComponent, ModalComponent, CommonModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  papel: string | null = null;

  constructor() {
    this.papel = localStorage.getItem('papel');
  }
}
