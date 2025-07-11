import { HttpClient } from '@angular/common/http';
import { environment } from './env';
import { IProdutos } from '../interfaces/IProdutos.interface';

export class baseService {
  constructor(private readonly http: HttpClient, complementoURL: string) {
    this.complementoURL = complementoURL;
  }
  complementoURL = '';
  base = environment.baseUrl;

  get(id: number) {
    return this.http.get(this.base + `${this.complementoURL}?id=${id}`);
  }

  getAll() {
    return this.http.get(this.base + `${this.complementoURL}/all`);
  }

  post(content: IProdutos) {
    return this.http
      .post(this.base + `${this.complementoURL}`, content)
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
}
