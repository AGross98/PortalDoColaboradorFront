import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioListarComponent } from './pages/funcionario/funcionario-listar/funcionario-listar.component';
import { FormsModule } from '@angular/forms';
import { FuncionarioCadastrarComponent } from './src/app/pages/funcionario/funcionario-cadastrar/funcionario-cadastrar.component';
import { JornadaListarComponent } from './pages/jornada/jornada-listar/jornada-listar.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    FuncionarioListarComponent,
    FuncionarioCadastrarComponent,
    JornadaListarComponent
  ]
})
export class AppModule { }
