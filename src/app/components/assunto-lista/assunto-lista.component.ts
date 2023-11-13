import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assunto } from 'src/app/models/assunto';
import { AssuntoService } from 'src/app/services/assunto.service';

@Component({
  selector: 'app-assunto-lista',
  templateUrl: './assunto-lista.component.html',
  styleUrls: ['./assunto-lista.component.css']
})
export class AssuntoListaComponent implements OnInit {
  assuntos: Assunto[] = [];

  constructor(private service: AssuntoService,
              private router: Router){}

  ngOnInit(): void {
    this.loadAssuntos();
  }

  loadAssuntos() {
    this.service.listar().subscribe(assuntos => {
      this.assuntos = assuntos;
    });
  }

  excluir(assunto: Assunto) {
    if (assunto.codigo) {
      this.service.deletarAssunto(assunto.codigo).subscribe(() => {
        this.loadAssuntos();
      }, () => {
        alert("Ocorreu um erro ao tentar remover o registro. Verifique se não existem dados vinculados a este assunto!");
      });
    }
  }

  editar(assunto: Assunto) {
    this.router.navigateByUrl("/assunto-cadastro/" + assunto.codigo);
  }
}
