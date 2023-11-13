import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livro-cadastro',
  templateUrl: './livro-cadastro.component.html',
  styleUrls: ['./livro-cadastro.component.css'],
})
export class LivroCadastroComponent implements OnInit {
  livroForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private service: LivroService){}


  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.livroForm = this.fb.group({
      titulo: ['', Validators.required],
      editora: ['', Validators.required],
      edicao: ['', Validators.required],
      anoPublicacao: ['', Validators.required],
      valor: ['', Validators.required],
      autor: this.fb.array([]),
      assunto: this.fb.array([]),
    });
  }

  adicionarAutor() {
    const autor = this.livroForm.get('autor') as FormArray;
    autor.push(
      this.fb.group({
        codigo: ['', Validators.required],
        nome: ['', Validators.required],
      })
    );
  }

  removerAutor(index: number) {
    const autor = this.livroForm.get('autor') as FormArray;
    autor.removeAt(index);
  }

  get autores() {
    return this.livroForm.get('autor') as FormArray;
  }

  get assuntos() {
    return this.livroForm.get('assunto') as FormArray;
  }

  adicionarAssunto() {
    const assunto = this.livroForm.get('assunto') as FormArray;
    assunto.push(
      this.fb.group({
        codigo: ['', Validators.required],
        descricao: ['', Validators.required],
      })
    );
  }

  removerAssunto(index: number) {
    const assunto = this.livroForm.get('assunto') as FormArray;
    assunto.removeAt(index);
  }

  cadastrarLivro() {
    if (this.livroForm.valid) {
      const livro = this.livroForm.value;
      this.service.cadastrarLivro(livro).subscribe((livroCadastrado) => {
        console.log('Livro cadastrado com sucesso:', livroCadastrado);
        // Adicione lógica adicional, como navegação para a lista de livros
      });
    }
  }
}
