import { Component, Input } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ProdutoService } from '../../services/produto/produto.service';

@Component({
  selector: 'app-popconfirm',
  imports: [NzPopconfirmModule, NzIconModule],
  templateUrl: './popconfirm.component.html',
  styleUrl: './popconfirm.component.css',
})
export class PopconfirmComponent {
  @Input() id!: number;

  constructor(
    private nzMessageService: NzMessageService,
    private produtoService: ProdutoService
  ) {}

  cancel(id: number): void {
    this.nzMessageService.info('Produto não excluído');
  }

  confirm(id: number): void {
    console.log('Confirmou');

    try {
      this.produtoService.delete(id);
      this.nzMessageService.success('Produto excluido com sucesso');
    } catch {
      this.nzMessageService.error('Não foi possível excluír produto');
    }
  }
}
