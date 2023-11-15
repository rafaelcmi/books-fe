import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Assunto } from 'src/app/models/assunto';
import { AssuntoService } from 'src/app/services/assunto.service';

@Component({
  selector: 'app-assunto-cadastro',
  templateUrl: './assunto-cadastro.component.html',
  styleUrls: ['./assunto-cadastro.component.css']
})
export class AssuntoCadastroComponent implements OnInit {
  assuntoForm!: FormGroup;
  public assuntoId!: string | null;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private service: AssuntoService){

    if (this.route.snapshot.paramMap) {
      if (this.route.snapshot.paramMap.get('id') != "new") {
        this.assuntoId = this.route.snapshot.paramMap.get('id');
        this.recuperarAssunto(this.assuntoId);
      }
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.assuntoForm = this.fb.group({
      codigo: [''],
      descricao: ['', Validators.required]
    });
  }

  recuperarAssunto(id: string | null) {
    if (this.assuntoId) {
      this.service.obterAssunto(Number(id)).subscribe((assunto: Assunto) => {
        this.assuntoForm.get('codigo')?.setValue(assunto.codigo);
        this.assuntoForm.get('descricao')?.setValue(assunto.descricao);
        //this.assuntoForm.get('codigo')?.disable();
      })
    }
  }

  get codigo() {
    return this.assuntoForm.get('codigo') as FormControl;
  }

  salvarAssunto(){
    if (this.assuntoForm.valid) {
      const assunto: Assunto = this.assuntoForm.value;
      if (assunto.codigo) {
        this.service.atualizarAssunto(assunto.codigo, assunto).subscribe((assuntoCadastrado) => {
          this.router.navigateByUrl("/assunto-lista");
          alert('Assunto "' + assuntoCadastrado.descricao + '" atualizado com sucesso!');
        });
      } else {
        this.service.cadastrarAssunto(assunto).subscribe((assuntoAtualizado) => {
          this.router.navigateByUrl("/assunto-lista");
          alert('Assunto "' + assuntoAtualizado.descricao + '" cadastrado com sucesso!');
        });
      }
    }
  }
}
