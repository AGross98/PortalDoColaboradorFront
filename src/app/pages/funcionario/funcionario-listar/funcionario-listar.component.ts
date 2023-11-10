import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionarios';

@Component({
  selector: 'app-funcionario-listar',
  templateUrl: './funcionario-listar.component.html',
  styleUrls: ['./funcionario-listar.component.css']
})
export class FuncionarioListarComponent {

  funcionarios : Funcionario[] = []

 constructor(private clinet: HttpClient){
  
 }
 
 ngOnInit(): void{
  console.log("o conponente foi inciado");

  this.clinet.get<Funcionario[]>("https://localhost:7061/portalcolaborador/funcionario/listar").subscribe({
    next: (funcionarios) =>{
      this.funcionarios = funcionarios;
      console.table(funcionarios);
    },

    error:(erro) => {
      console.log(erro);
    }

  })
 }

 Deletar(id: number): void{
  console.log(id);
  this.clinet.delete(`https://localhost:7061/portalcolaborador/funcionario/deletar/${id}`)
  .subscribe({
    next: () =>{
      this.ngOnInit();
    }
  })
 }

}

//https://localhost:7061/portalcolaborador/funcionario/listar