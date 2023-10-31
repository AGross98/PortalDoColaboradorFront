import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioListarComponent } from './pages/funcionario/funcionario-listar/funcionario-listar.component';
import { FuncionarioCadastrarComponent } from './pages/funcionario/funcionario-cadastrar/funcionario-cadastrar.component';

const routes: Routes = [

  {
    path: "",
    component: FuncionarioListarComponent
  },
  {
    path: "portalcolaborador/funcionario/listar",
    component: FuncionarioListarComponent
  },
  {
    path: "portalcolaborador/funcionario/cadastrar",
    component: FuncionarioCadastrarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
