import { HttpClient } from '@angular/common/http';
import { Component, Inject, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';

export const ROUTER_TOKEN = new InjectionToken<Router>('router');

@Component({
  selector: 'app-jornada-cadastrar',
  templateUrl: './jornada-cadastrar.component.html',
  styleUrls: ['./jornada-cadastrar.component.css'],
  providers: [{ provide: ROUTER_TOKEN, useValue: Router }]
})
export class JornadaCadastrarComponent {
  data: string = ''; // Suponha que você tenha um campo de data no seu formulário de cadastro
  funcionarioId: number = 1; // Suponha que você tenha um ID de funcionário associado à jornada

  constructor(
    private httpClient: HttpClient,
    @Inject(ROUTER_TOKEN) private router: Router
  ) {}

  cadastrarJornada(): void {
    console.log("Cadastrar jornada");
    const jornada = {
      data: this.data,
      funcionarioId: this.funcionarioId
    };

    this.httpClient.post("https://localhost:7061/portalcolaborador/jornada/cadastrar", jornada)
      .subscribe({
        next: () => {
          console.log("Jornada cadastrada com sucesso");
          this.router.navigate(['portalcolaborador/jornada/listar']);
        },
        error: (err) => {
          console.log("Erro ao cadastrar jornada", err);
        }
      });
  }
}
