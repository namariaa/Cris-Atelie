import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@Component({
  selector: 'app-login',
  imports: [ 
    NzButtonModule,
    FormsModule,
    NzInputModule,
    NzFormModule,
    NzIconModule,
    NzPageHeaderModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private router = inject(Router);
  
  constructor(private usuarioService: UsuarioService) {}

  handleOk(form: NgForm): void {
    const response = this.usuarioService.login({"login": form.value.email, "senha": form.value.senha}).
    subscribe((value: Object) => {
      localStorage.setItem('authToken', String(value));
      
     });
    this.router.navigate(['/']);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
  }
}
