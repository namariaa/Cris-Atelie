import { Injectable } from '@angular/core';
import { baseService } from '../baseService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends baseService {
  constructor(http: HttpClient) {
    super(http, '/produto');
  }
}

