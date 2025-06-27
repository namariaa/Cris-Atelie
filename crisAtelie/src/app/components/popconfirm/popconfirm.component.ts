import { Component, Input } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ProdutosList } from '../../banco';

@Component({
  selector: 'app-popconfirm',
  imports: [NzPopconfirmModule, NzIconModule],
  templateUrl: './popconfirm.component.html',
  styleUrl: './popconfirm.component.css'
})
export class PopconfirmComponent {
  @Input() id!:number;

  constructor(private nzMessageService: NzMessageService) {}

  cancel(id:number): void {
    this.nzMessageService.info('Produto não excluído');    
  }

  confirm(id:number): void {
    try{
      ProdutosList.splice(id - 1, 1);
      this.nzMessageService.success('Produto excluido com sucesso');
    }catch{
      this.nzMessageService.error('Não foi possível excluír produto');
    }
  }
}
