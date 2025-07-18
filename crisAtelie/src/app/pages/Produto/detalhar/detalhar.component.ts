import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ProdutoService } from '../../../services/produto/produto.service';

@Component({
  selector: 'app-detalhar',
  imports: [RouterOutlet],
  standalone:true,
  templateUrl: './detalhar.component.html',
  styleUrl: './detalhar.component.css',
})
export class DetalharComponent {
  id: string | null = null;
  produto: any;

  constructor(private router: Router, private produtoService: ProdutoService) {}


  ngOnInit() {
    this.id = this.router.url.slice(1);
    this.getProdutos();
  }

  async getProdutos(): Promise<void> {
    try {
      console.log(this.id);
      const response = await this.produtoService.get(Number(this.id));
      response.subscribe((data: any) => {
        this.produto = data;
        console.log(data);
      });
    } catch (e) {
      console.error('Deu erro ao carregar produto ', e);
    }
  }

}
