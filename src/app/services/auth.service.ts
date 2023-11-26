import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuario: Usuario | null = null;

  constructor(private http: HttpClient) {}

  login(usuario: Usuario): Observable<any> {
    // Substitua a URL pelo endpoint real da sua API de autenticação
    const apiUrl = 'https://localhost:7061/portalcolaborador/login/autenticar';

    return this.http.post(apiUrl, usuario).pipe(
      tap((response: any) => {
        // Verifica se a resposta contém uma mensagem de autenticação bem-sucedida
        if (response && response.message) {
          // Exibe a mensagem (pode ser útil para depuração)
          console.log(response.message);

          // Se necessário, você pode realizar outras ações aqui com base na mensagem

        } else if (response && response.funcionario) {
          // Se a resposta contiver informações do funcionário, armazene o usuário autenticado
          this.usuario = response;
        } else {
          console.error('Resposta da API não contém as informações esperadas:', response);
        }
      })
    );
  }

  // Verifica se o usuário é um gerente
  isGerente(): boolean {
    const cargo = this.usuario?.funcionario?.cargo;
    console.log('Cargo do funcionário:', cargo);
  
    return cargo === 1;
  }
}
