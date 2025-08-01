import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './env';
import { IProdutos } from '../interfaces/IProdutos.interface';

export class baseService {
  constructor(private readonly http: HttpClient, complementoURL: string) {
    this.complementoURL = complementoURL;
  }
  complementoURL = '';
  base = environment.baseUrl;

  get(id: number) {
    return this.http.get(this.base + `${this.complementoURL}/${id}`);
  }

  getAll() {
    return this.http.get(this.base + `${this.complementoURL}`);
  }

  post(content: IProdutos) {
    console.log(this.base + `${this.complementoURL}`, content, {
      headers: { 'Content-Type': 'application/json' },
    });
    return this.http
      .post(this.base + `${this.complementoURL}`, content, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe();
  }

  put(id: number, content: IProdutos) {
    return this.http
      .put(this.base + `${this.complementoURL}?id=${id}`, content)
      .subscribe();
  }

  delete(id: number) {
    console.log(this.base + `${this.complementoURL}?id=${id}`);

    return this.http
      .delete(this.base + `${this.complementoURL}?id=${id}`)
      .subscribe();
  }

  login(content: any) {
      return this.http
        .post(this.base + `${this.complementoURL}/login`, content, {
          headers: { 'Content-Type': 'application/json' },
        })
        ;
  }

  cadastro(content: any) {
      return this.http
        .post(this.base + `${this.complementoURL}/cadastro`, content, {
          headers: { 'Content-Type': 'application/json' },
        })
        .subscribe();
  }
}
