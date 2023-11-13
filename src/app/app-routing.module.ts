import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroListaComponent } from './components/livro-lista/livro-lista.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { LivroCadastroComponent } from './components/livro-cadastro/livro-cadastro.component';
import { ReportListaComponent } from './components/report-lista/report-lista.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'livro-lista', component: LivroListaComponent },
  { path: 'livro-cadastro/:id', component: LivroCadastroComponent },
  { path: 'report-lista', component: ReportListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
