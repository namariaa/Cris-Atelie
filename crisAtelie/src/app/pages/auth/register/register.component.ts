import { NzButtonModule } from 'ng-zorro-antd/button';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NzButtonModule,
    FormsModule,
    NzInputModule,
    NzFormModule,
    NzIconModule,
    NzPageHeaderModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  handleOk(form: NgForm): void {
    console.log('LALLALA');
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
  }
}
