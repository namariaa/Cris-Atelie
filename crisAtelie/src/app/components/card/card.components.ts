import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IProdutos } from '../../interfaces/IProdutos.interface';
import { ProdutosList } from '../../banco';

@Component({
  selector: 'app-card',
  imports: [NzCardModule, NzIconModule],
  standalone: true, 
  templateUrl: './card.components.html',
  styleUrl: './card.components.css'
})

export class CardComponent {
  @Input() produtos : IProdutos[] = ProdutosList;
}

