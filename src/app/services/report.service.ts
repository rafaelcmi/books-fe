import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'http://localhost:8080/reports';

  constructor(private http: HttpClient) { }

  listar(): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiUrl);
  }

  obterReportsAutor(idAutor: number): Observable<Report> {
    return this.http.get<Report>(`${this.apiUrl}/${idAutor}`);
  }
}
