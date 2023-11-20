import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionarios';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login-cadastrar',
  templateUrl: './login-cadastrar.component.html',
  styleUrls: ['./login-cadastrar.component.css']
})
export class LoginCadastrarComponent {

  cpf!: number;
  user!: string;
  senha!: string;
  funcionario!: Funcionario;
  funcionarios: Funcionario[] = []

  constructor(
    private client: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    console.log("o conponente foi inciado");

    this.client.get<Funcionario[]>("https://localhost:7061/portalcolaborador/funcionario/listar").subscribe({
      next: (funcionarios) => {
        this.funcionarios = funcionarios;
        console.table(funcionarios);
      },

      error: (erro) => {
        console.log(erro);
      }
    })
  }


  CadastrarUsuario() {

    const funcionarioCorrespondente = this.funcionarios.find(f => f.cpf === this.cpf.toString())
    console.log(funcionarioCorrespondente);

    if (funcionarioCorrespondente) {
      const usuario: Usuario = {
        user: this.user,
        senha: this.senha,
        funcionario: funcionarioCorrespondente
      };
      console.log(usuario)

      this.client.post<Usuario>("https://localhost:7061/portalcolaborador/login/cadastrar", usuario)
        .subscribe({
          next: () => {
            this.router.navigate(['portalcolaborador/login']);
          }
        })
    }
  }
}
