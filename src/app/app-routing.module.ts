import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroListaComponent } from './components/livro-lista/livro-lista.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LivroCadastroComponent } from './components/livro-cadastro/livro-cadastro.component';
import { ReportListaComponent } from './components/report-lista/report-lista.component';
import { AutorListaComponent } from './components/autor-lista/autor-lista.component';
import { AutorCadastroComponent } from './components/autor-cadastro/autor-cadastro.component';
import { AssuntoListaComponent } from './components/assunto-lista/assunto-lista.component';
import { AssuntoCadastroComponent } from './components/assunto-cadastro/assunto-cadastro.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'livro-lista', component: LivroListaComponent },
  { path: 'livro-cadastro/:id', component: LivroCadastroComponent },

  { path: 'autor-lista', component: AutorListaComponent },
  { path: 'autor-cadastro', component: AutorCadastroComponent },
  { path: 'autor-cadastro/:id', component: AutorCadastroComponent },

  { path: 'assunto-lista', component: AssuntoListaComponent },
  { path: 'assunto-cadastro', component: AssuntoCadastroComponent },
  { path: 'assunto-cadastro/:id', component: AssuntoCadastroComponent },
  { path: 'report-lista', component: ReportListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
