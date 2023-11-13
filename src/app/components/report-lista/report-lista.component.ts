import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/livro';
import { Report } from 'src/app/models/report';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-lista',
  templateUrl: './report-lista.component.html',
  styleUrls: ['./report-lista.component.css']
})
export class ReportListaComponent implements OnInit{
  reports: Report[] = [];
  mapAutor: Map<number, Livro[]> = new Map();

  constructor(private service: ReportService){}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports() {
    this.service.listar().subscribe(reports => {
      this.reports = reports;
      if (this.reports) {

      }
    });
  }


}
