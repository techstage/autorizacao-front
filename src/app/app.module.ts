import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutorizacaoListagemComponent } from './autorizacao-listagem/autorizacao-listagem.component';
import { AutorizacaoService } from './autorizacao.service';

@NgModule({
  declarations: [
    AppComponent,
    AutorizacaoListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ AutorizacaoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
