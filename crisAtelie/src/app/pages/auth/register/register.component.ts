import { NzButtonModule } from 'ng-zorro-antd/button';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { Router } from '@angular/router';

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
  private router = inject(Router);
  
  constructor(private usuarioService: UsuarioService) {}

  handleOk(form: NgForm): void {
    this.usuarioService.cadastro({"nome": form.value.nome, "login": form.value.email, "senha": form.value.senha});
    this.router.navigate(['/login']);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
  }
}
