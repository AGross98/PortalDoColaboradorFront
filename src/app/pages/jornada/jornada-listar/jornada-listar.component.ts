import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Jornada } from 'src/app/models/jornada';

@Component({
  selector: 'app-jornada-listar',
  templateUrl: './jornada-listar.component.html',
  styleUrls: ['./jornada-listar.component.css']
})
export class JornadaListarComponent implements OnInit {

  jornadas : Jornada [] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    console.log("O componente foi iniciado");

    this.httpClient.get<Jornada[]>("https://localhost:7061/portalcolaborador/jornada/listar").subscribe({
      next: (jornadas) => {
        this.jornadas = jornadas;
        console.table(jornadas);
      },
      error: (erro) => {
        console.log(erro);
      }
    });
  }
}
