import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [InputTextModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() label:string = '';
  @Input() value:string = '';
}
