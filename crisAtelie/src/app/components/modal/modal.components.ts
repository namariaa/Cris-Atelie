import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { Component, inject, Input } from '@angular/core';
import {
  FormsModule,
  NgForm,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { NzFormLayoutType, NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ButtonComponent } from '../button/button.component';
import { ProdutosList } from '../../banco';

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
  ],
  templateUrl: './modal.components.html',
  styleUrl: './modal.components.css',
})
export class ModalComponent {
  @Input() titulo!: string;
  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(form: NgForm): void {
    ProdutosList.push({
      id: ProdutosList.length,
      name: form.value['nome'],
      description: form.value['descricao'],
      value: form.value['valor'],
    });

    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
