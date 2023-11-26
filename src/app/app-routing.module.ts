import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioListarComponent } from './pages/funcionario/funcionario-listar/funcionario-listar.component';
import { FuncionarioCadastrarComponent } from './pages/funcionario/funcionario-cadastrar/funcionario-cadastrar.component';
import { JornadaCadastrarComponent } from './pages/jornada/jornada-cadastrar/jornada-cadastrar.component';
import { JornadaListarComponent } from './pages/jornada/jornada-listar/jornada-listar.component';
import { FuncionarioEditarComponent } from './pages/funcionario/funcionario-editar/funcionario-editar.component';
import { LoginCadastrarComponent } from './pages/login/login-cadastrar/login-cadastrar.component';
import { LoginAutenticarComponent } from './pages/login/login-autenticar/login-autenticar.component';
import { HomeGerenteComponent } from './pages/home/home-gerente/home-gerente.component';
import { HomeFuncionarioComponent } from './pages/home/home-funcionario/home-funcionario.component';

const routes: Routes = [

  {
    path: "",
    component: LoginAutenticarComponent
  },
  {
    path: "portalcolaborador/login/cadastrar",
    component: LoginCadastrarComponent
  },
  {
    path: "portalcolaborador/login",
    component: LoginAutenticarComponent
  },
  {
    path: "portalcolaborador/home-gerente",
    component: HomeGerenteComponent
  },
  {
    path: "portalcolaborador/home-usuario",
    component: HomeFuncionarioComponent
  },
  {
    path: "portalcolaborador/funcionario/listar",
    component: FuncionarioListarComponent
  },
  {
    path: "portalcolaborador/funcionario/cadastrar",
    component: FuncionarioCadastrarComponent
  },
  {
    path: "portalcolaborador/jornada/listar",
    component: JornadaListarComponent
  },
  {
    path: "portalcolaborador/jornada/cadastrar",
    component: JornadaCadastrarComponent
  },
  {
    path: "portalcolaborador/jornada/editar/:id",
    component: FuncionarioEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
