import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-detalhar',
  imports: [RouterOutlet],
  templateUrl: './detalhar.component.html',
  styleUrl: './detalhar.component.css',
})
export class DetalharComponent {
  id: string | null = null;

  currentUrl: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.router.url);
  }
}
