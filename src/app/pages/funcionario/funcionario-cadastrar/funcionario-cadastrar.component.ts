import { Component } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionarios';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-cadastrar',
  templateUrl: './funcionario-cadastrar.component.html',
  styleUrls: ['./funcionario-cadastrar.component.css']
})
export class FuncionarioCadastrarComponent {
  nome!: string;
  cpf!: string;
  cargo: number = 0; // Inicialize o cargo como 0 (Funcionário)
  status: number = 0;

  constructor(private client: HttpClient, private router: Router) {}

  Cadastrar(): void {
    let funcionario: Funcionario = {
      nome: this.nome,
      cpf: this.cpf,
      cargo: this.cargo,
      status: this.status
    };

    this.client.post<Funcionario>('https://localhost:7061/portalcolaborador/funcionario/cadastrar', funcionario)
      .subscribe({
        next: () => {
          this.router.navigate(['portalcolaborador/funcionario/listar']);
        },
        error: (err) => {
          console.log('erro', err);
        },
      });
  }
}