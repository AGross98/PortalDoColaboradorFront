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
    const apiUrl = 'https://localhost:7061/portalcolaborador/login/autenticar';
  
    return this.http.post(apiUrl, usuario).pipe(
      tap((response: any) => {
        if (response && response.user && response.funcionario) {
          this.usuario = response; // Atualize diretamente a propriedade usuario
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
