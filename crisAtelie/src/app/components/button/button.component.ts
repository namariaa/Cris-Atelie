import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-button',
  standalone: true, 
  imports: [NzButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = "Salvar";
}

