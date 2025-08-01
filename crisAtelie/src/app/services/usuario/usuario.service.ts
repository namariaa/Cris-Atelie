import { Injectable } from '@angular/core';
import { baseService } from '../baseService';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends baseService{

  constructor(http: HttpClient) {
    super(http, '/auth');
  }
}


