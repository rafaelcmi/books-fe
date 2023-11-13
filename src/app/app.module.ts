import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './components/livro-lista/livro-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from './components/principal/principal.component';
import { LivroCadastroComponent } from './components/livro-cadastro/livro-cadastro.component';
import { ReportListaComponent } from './components/report-lista/report-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent,
    PrincipalComponent,
    LivroCadastroComponent,
    ReportListaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
