import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { ColorPickerModule } from 'primeng/colorpicker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ColorPickerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Cria ateliê';
}

export class Legal {}
