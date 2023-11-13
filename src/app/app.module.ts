import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './components/livro-lista/livro-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './components/principal/principal.component';
import { ReportListaComponent } from './components/report-lista/report-lista.component';
import { AutorListaComponent } from './components/autor-lista/autor-lista.component';
import { AutorCadastroComponent } from './components/autor-cadastro/autor-cadastro.component';
import { AssuntoListaComponent } from './components/assunto-lista/assunto-lista.component';
import { AssuntoCadastroComponent } from './components/assunto-cadastro/assunto-cadastro.component';
import { CommonModule } from '@angular/common';
import { LivroCadastroComponent } from './components/livro-cadastro/livro-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent,
    LivroCadastroComponent,
    AutorCadastroComponent,
    AutorListaComponent,
    PrincipalComponent,
    ReportListaComponent,
    AssuntoListaComponent,
    AssuntoCadastroComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
