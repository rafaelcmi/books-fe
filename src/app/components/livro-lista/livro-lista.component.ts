import { Autor } from './../../models/autor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  livros: Livro[] = [];
  novoLivro: Livro = {
    titulo: '',
    anoPublicacao: '',
    edicao: 0,
    editora: '',
    valor: 0,
    autor: [],
    assunto: []
  }

  constructor(private service: LivroService,
              private router: Router){}

  ngOnInit(): void {
    this.loadLivros();
  }

  loadLivros() {
    this.service.listar().subscribe(livros => {
      this.livros = livros;
    });
  }

  excluir(livro: Livro) {
    if (livro.codigo) {
      this.service.deletarLivro(livro.codigo).subscribe(() => {
        this.loadLivros();
      });
    }
  }

  editar(livro: Livro) {

  }

  salvar() {
    this.service.cadastrarLivro(this.novoLivro).subscribe((livro) => {
      this.router.navigateByUrl("/");
      console.log('Livro cadastrado com sucesso:', livro);
    })
  }

  cancelar() {

  }

  removerAutor(index: number) {
    this.novoLivro.autor.splice(index, 1);
  }

  adicionarAutor() {
    this.novoLivro.autor.push({nome: ''});
  }

  removerAssunto(index: number) {
    this.novoLivro.assunto.splice(index, 1);
  }

  adicionarAssunto() {
    this.novoLivro.assunto.push({descricao: ''});
  }

}
