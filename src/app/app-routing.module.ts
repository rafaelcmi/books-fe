import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroListaComponent } from './components/livro-lista/livro-lista.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
