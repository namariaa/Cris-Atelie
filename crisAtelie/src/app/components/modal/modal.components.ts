import { NzButtonModule, NzButtonType } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { Component, inject, Input } from '@angular/core';
import {
  FormsModule,
  NgForm,
} from '@angular/forms';
import {  NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ButtonComponent } from '../button/button.component';
import { ProdutosList } from '../../banco';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IProdutos } from '../../interfaces/IProdutos.interface';

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
    NzIconModule
  ],
  templateUrl: './modal.components.html',
  styleUrl: './modal.components.css',
})
export class ModalComponent {
  @Input() titulo!: string;
  @Input() label?: string;
  @Input() default?: IProdutos;
  @Input() tipo!: string;
  @Input() buttonStyle: NzButtonType = "primary";
  @Input() buttonIcon: string = '';
  @Input() id!: number;

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(form: NgForm): void {
    if (this.tipo == "criar"){
      ProdutosList.push({
        id: ProdutosList.length,
        name: form.value['nome'],
        description: form.value['descricao'],
        value: form.value['valor'],
      });
    }
    else{
      console.log(form.value, this.id);
      
      if (form.value['nome']){
        ProdutosList[this.id - 1].name = form.value['nome'];
      }
      if (form.value['descricao']){
        ProdutosList[this.id - 1].description = form.value['descricao'];
      }
      if (form.value['valor']){
        ProdutosList[this.id - 1].value = form.value['valor'];
      }
    }

    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
