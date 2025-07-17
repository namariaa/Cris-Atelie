import { Component, inject, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PopconfirmComponent } from '../popconfirm/popconfirm.component';
import { ModalComponent } from '../modal/modal.components';
import { ProdutoService } from '../../services/produto/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [NzCardModule, NzIconModule, PopconfirmComponent, ModalComponent],
  standalone: true,
  templateUrl: './card.components.html',
  styleUrl: './card.components.css',
})
export class CardComponent {
  @Input() produtos: any = [];
  private router = inject(Router);

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  detalhar(id: number) {
    this.router.navigate(['/', id]);
  }

  async getProdutos(): Promise<void> {
    try {
      const response = await this.produtoService.getAll();
      response.subscribe((data) => {
        this.produtos = data;
        console.log(data);
      });
    } catch (e) {
      console.error('Deu erro ao carregar produtos ', e);
    }
  }
}
