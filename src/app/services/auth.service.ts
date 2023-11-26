// auth.service.ts

import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioLogado: Usuario | null = null;

  login(usuario: Usuario): boolean {
    // Simulação de autenticação
    // Aqui você pode adicionar a lógica de autenticação real
    // Por exemplo, comparar com usuários no banco de dados
    if (usuario.user === 'gerente' && usuario.senha === 'senha_gerente') {
      this.usuarioLogado = usuario;
      return true;
    } else if (usuario.user === 'usuario' && usuario.senha === 'senha_usuario') {
      this.usuarioLogado = usuario;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.usuarioLogado = null;
  }

  isGerente(): boolean {
    // Verifica se o usuário logado é um gerente
    return this.usuarioLogado?.user === 'gerente';
  }

  getUsuarioLogado(): Usuario | null {
    return this.usuarioLogado;
  }
}
