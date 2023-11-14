import { HttpClient } from '@angular/common/http';
import { Component, Inject, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionarios';
import { Jornada } from 'src/app/models/jornada';

export const ROUTER_TOKEN = new InjectionToken<Router>('router');

@Component({
  selector: 'app-jornada-cadastrar',
  templateUrl: './jornada-cadastrar.component.html',
  styleUrls: ['./jornada-cadastrar.component.css'],
  providers: [{ provide: ROUTER_TOKEN, useValue: Router }]
})
export class JornadaCadastrarComponent {
  ponto!: Date
  teste1: number = 0;
  funcionarioId: number = 0 //So esta salvando no ID setado aqui. bug na hora de pegar o Id selecionado.
  funcionarios : Funcionario[] = []
  
  constructor(
    private client: HttpClient,
  ) {}

  
  ngOnInit(): void{
    console.log("o conponente foi inciado");
  
    this.client.get<Funcionario[]>("https://localhost:7061/portalcolaborador/funcionario/listar").subscribe({
      next: (funcionarios) =>{
        this.funcionarios = funcionarios;
        console.table(funcionarios);
      },
  
      error:(erro) => {
        console.log(erro);
      }
  
    })
   }


  Cadastrar(): void {
    console.log("Cadastrar jornada");
     const jornada: Jornada = {
       ponto : this.ponto,
       funcionarioId: this.funcionarioId
     };
    console.log(jornada)
  }
}
