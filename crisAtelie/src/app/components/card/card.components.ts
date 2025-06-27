import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IProdutos } from '../../interfaces/IProdutos.interface';
import { ProdutosList } from '../../banco';
import { PopconfirmComponent } from '../popconfirm/popconfirm.component';
import { ModalComponent } from '../modal/modal.components';

@Component({
  selector: 'app-card',
  imports: [NzCardModule, NzIconModule, PopconfirmComponent, ModalComponent],
  standalone: true, 
  templateUrl: './card.components.html',
  styleUrl: './card.components.css'
})

export class CardComponent {
  @Input() produtos : IProdutos[] = ProdutosList;
}

