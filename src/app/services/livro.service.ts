import { Injectable } from '@angular/core';
import { HttpService } from './core/http.service';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private httpService: HttpService) { }

  async listarLivros() {
    return await this.httpService.get('livros');
  }
}
