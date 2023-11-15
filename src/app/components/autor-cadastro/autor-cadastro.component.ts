import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from 'src/app/models/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autor-cadastro',
  templateUrl: './autor-cadastro.component.html',
  styleUrls: ['./autor-cadastro.component.css']
})
export class AutorCadastroComponent implements OnInit {
  autorForm!: FormGroup;
  public autorId!: string | null;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private service: AutorService){


    if (this.route.snapshot.paramMap) {
      if (this.route.snapshot.paramMap.get('id')) {
        this.autorId = this.route.snapshot.paramMap.get('id');
        this.recuperarAutor(this.autorId);
      }
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.autorForm = this.fb.group({
      codigo: [''],
      nome: ['', Validators.required]
    });
    this.autorForm.get('codigo')?.disable();
  }

  async recuperarAutor(id: string | null) {
    if (this.autorId) {
      await this.service.obterAutor(Number(id)).subscribe((autor: Autor) => {
        this.autorForm.get('codigo')?.setValue(autor.codigo);
        this.autorForm.get('nome')?.setValue(autor.nome);
      })
    }
  }

  salvarAutor(){
    if (this.autorForm.valid) {
      const autor: Autor = this.autorForm.value;
      if (autor.codigo) {
        this.service.atualizarAutor(autor.codigo, autor).subscribe((autorCadastrado) => {
          this.router.navigateByUrl("/autor-lista");
          alert('Autor "' + autorCadastrado.nome + '" atualizado com sucesso!');
        });
      } else {
        this.service.cadastrarAutor(autor).subscribe((autorAtualizado) => {
          this.router.navigateByUrl("/autor-lista");
          alert('Autor "' + autorAtualizado.nome + '" cadastrado com sucesso!');
        });
      }
    }
  }
}
