import { NzButtonModule, NzButtonType } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ButtonComponent } from '../button/button.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IProdutos } from '../../interfaces/IProdutos.interface';
import { ProdutoService } from '../../services/produto/produto.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NzButtonModule,
    NzModalModule,
    FormsModule,
    NzInputModule,
    NzFormModule,
    ButtonComponent,
    NzIconModule,
  ],
  templateUrl: './modal.components.html',
  styleUrl: './modal.components.css',
})
export class ModalComponent {
  @Input() titulo!: string;
  @Input() label?: string;
  @Input() default?: IProdutos;
  @Input() tipo!: string;
  @Input() buttonStyle: NzButtonType = 'primary';
  @Input() buttonIcon: string = '';
  @Input() id!: number;

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  constructor (private produtoService : ProdutoService){}

  handleOk(form: NgForm): void {
    const valores = {
      "name": form.value['nome'],
      "description": form.value['descricao'],
      "valor": form.value['valor'],
    }
    
    if (this.tipo == 'criar') {
      this.produtoService.post(valores);
   
    }
    else {
      this.produtoService.put(valores);
    }
    
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
