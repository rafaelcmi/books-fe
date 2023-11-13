import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assunto } from '../models/assunto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssuntoService {
  private apiUrl = 'http://localhost:8080/assuntos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Assunto[]> {
    return this.http.get<Assunto[]>(this.apiUrl);
  }

  obterAssunto(id: number): Observable<Assunto> {
    return this.http.get<Assunto>(`${this.apiUrl}/${id}`);
  }

  cadastrarAssunto(assunto: Assunto): Observable<Assunto> {
    return this.http.post<Assunto>(this.apiUrl, assunto);
  }

  atualizarAssunto(id: number, assunto: Assunto): Observable<Assunto> {
    return this.http.put<Assunto>(`${this.apiUrl}/${id}`, assunto);
  }

  deletarAssunto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
