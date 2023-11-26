import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionarios';
import { Jornada } from 'src/app/models/jornada';

@Component({
  selector: 'app-jornada-cadastrar',
  templateUrl: './jornada-cadastrar.component.html',
  styleUrls: ['./jornada-cadastrar.component.css'],
})
export class JornadaCadastrarComponent {
  ponto!: Date;
  funcionarioId!: number;
  funcionarios: Funcionario[] = [];

  constructor(private client: HttpClient, private router: Router) { }

  ngOnInit(): void {
    console.log('O componente foi iniciado');

    this.client.get<Funcionario[]>('https://localhost:7061/portalcolaborador/funcionario/listar').subscribe({
      next: (funcionarios) => {
        this.funcionarios = funcionarios;
        console.table(funcionarios);
      },

      error: (erro) => {
        console.log(erro);
      },
    });
  }

  Cadastrar(): void {
    console.log('Cadastrar jornada');
    const jornada: Jornada = {
      ponto: this.ponto,
      funcionarioId: this.funcionarioId,
    };
    console.log(jornada);
    this.client.post('https://localhost:7061/portalcolaborador/jornada/cadastrar', jornada)
      .subscribe({
        next: () => {
          this.router.navigate(['portalcolaborador/jornada/listar']);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
}