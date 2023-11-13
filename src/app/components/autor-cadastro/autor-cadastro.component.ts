import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Autor } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autor-cadastro',
  templateUrl: './autor-cadastro.component.html',
  styleUrls: ['./autor-cadastro.component.css']
})
export class AutorCadastroComponent implements OnInit {
  novoAutor: Autor = {
    codigo: 0,
    nome: '',
  };

  constructor(private autorService: AutorService,
              private router: Router){}

  ngOnInit(): void {

  }

  cadastrarAutor() {
    this.autorService.cadastrarAutor(this.novoAutor).subscribe((autor: Autor) => {
      alert('Autor cadastrado com sucesso: ' + autor.nome);
    });
  }

}
