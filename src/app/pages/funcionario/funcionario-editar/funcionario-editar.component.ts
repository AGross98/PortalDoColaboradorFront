import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionarios';

@Component({
  selector: 'app-funcionario-editar',
  templateUrl: './funcionario-editar.component.html',
  styleUrls: ['./funcionario-editar.component.css']
})
export class FuncionarioEditarComponent {

  id!: number;
  nome!: string;
  cpf!: string;
  status!: number
  cargo!: number

  constructor(
    private client: HttpClient,
    private roter: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((parames)=>{
      let {id} = parames;
      console.log(id);
      this.client.get<Funcionario>(`https://localhost:7061/portalcolaborador/funcionario/listar/${id}`)
      .subscribe({
        next: (funcionario)=>{
          console.log (funcionario)
          this.nome = funcionario.nome;
          this.cpf = funcionario.cpf;
          this.status = funcionario.status;
        },
        error: (err)=>{
          console.log(err)
        }
      })
    })
  }

  Editar() {
    this.route.params.subscribe((params) => {
      let { id } = params;
  
      let funcionario: Funcionario = {
        nome: this.nome,
        cpf: this.cpf,
        status: this.status,
        cargo: this.cargo

      };
  
      this.client.put(`https://localhost:7061/portalcolaborador/funcionario/atualizar/${id}`, funcionario)
        .subscribe({
          next: () => {
            this.roter.navigate(['portalcolaborador/funcionario/listar']);
          },
          error: (err) => {
            console.error(err);
          },
        });
    });
  }
}