import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionarios';

@Component({
  selector: 'app-funcionario-listar',
  templateUrl: './funcionario-listar.component.html',
  styleUrls: ['./funcionario-listar.component.css']
})
export class FuncionarioListarComponent implements OnInit {
  colunasTabela: string[] = [
    'id',
    'nome',
    'cpf',
    'status',
    'cargo',
    'acoes'
  ];

  obterCargoLegivel(cargo: number): string {
    return cargo === 0 ? 'Funcionário' : 'Gerente';
  }

  funcionarios: Funcionario[] = [];

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    console.log('O componente foi iniciado');

    this.client.get<Funcionario[]>('https://localhost:7061/portalcolaborador/funcionario/listar')
      .subscribe({
        next: (funcionarios) => {
          this.funcionarios = funcionarios;
          console.table(funcionarios);
        },
        error: (erro) => {
          console.log(erro);
        }
      });
  }

  Deletar(id: number): void {
    console.log(id);
    this.client.delete(`https://localhost:7061/portalcolaborador/funcionario/deletar/${id}`)
      .subscribe({
        next: () => {
          this.ngOnInit();
        }
      });
  }
}