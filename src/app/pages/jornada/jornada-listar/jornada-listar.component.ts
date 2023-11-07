import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jornada-listar',
  templateUrl: './jornada-listar.component.html',
  styleUrls: ['./jornada-listar.component.css']
})
export class JornadaListarComponent implements OnInit {
  jornadas: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    console.log("O componente foi iniciado");

    this.httpClient.get<any[]>("https://localhost:7061/portalcolaborador/jornada/listar").subscribe({
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
