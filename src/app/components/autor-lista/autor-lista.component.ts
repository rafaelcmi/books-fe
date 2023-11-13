import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autor } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor.service';


@Component({
  selector: 'app-autor-lista',
  templateUrl: './autor-lista.component.html',
  styleUrls: ['./autor-lista.component.css']
})
export class AutorListaComponent implements OnInit {
  autores: Autor[] = [];

  constructor(private service: AutorService,
              private router: Router){}

  ngOnInit(): void {
    this.loadAutores();
  }

  loadAutores() {
    this.service.listar().subscribe(autores => {
      this.autores = autores;
    });
  }

  excluir(autor: Autor) {
    if (autor.codigo) {
      this.service.deletarAutor(autor.codigo).subscribe(() => {
        this.loadAutores();
      }, () => {
        alert("Ocorreu um erro ao tentar remover o registro. Verifique se não existem dados vinculados a este autor!");
      });
    }
  }

  editar(autor: Autor) {
    this.router.navigateByUrl("/autor-cadastro/" + autor.codigo);
  }
}
