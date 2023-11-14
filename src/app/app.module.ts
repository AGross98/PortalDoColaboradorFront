import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JornadaListarComponent } from './pages/jornada/jornada-listar/jornada-listar.component';
import { FuncionarioListarComponent } from './pages/funcionario/funcionario-listar/funcionario-listar.component';
import { FuncionarioCadastrarComponent } from './pages/funcionario/funcionario-cadastrar/funcionario-cadastrar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { JornadaCadastrarComponent } from './pages/jornada/jornada-cadastrar/jornada-cadastrar.component';
import { FuncionarioEditarComponent } from './pages/funcionario/funcionario-editar/funcionario-editar.component';
import { LoginAutenticarComponent } from './pages/login/login-autenticar/login-autenticar.component';
import { LoginCadastrarComponent } from './pages/login/login-cadastrar/login-cadastrar.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    FuncionarioListarComponent,
    FuncionarioCadastrarComponent,
    JornadaListarComponent,
    JornadaCadastrarComponent,
    FuncionarioEditarComponent,
    LoginAutenticarComponent,
    LoginCadastrarComponent
  ]
})
export class AppModule { }
