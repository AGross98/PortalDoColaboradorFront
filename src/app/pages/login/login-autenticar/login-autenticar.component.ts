// login-autenticar.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-autenticar',
  templateUrl: './login-autenticar.component.html',
  styleUrls: ['./login-autenticar.component.css'],
})
export class LoginAutenticarComponent {
  usuario: string = '';
  senha: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  autenticar(): void {
    const usuario: Usuario = { user: this.usuario, senha: this.senha, funcionario: { nome: '', cpf: '', status: 0 } };

    if (this.authService.login(usuario)) {
      if (this.authService.isGerente()) {
        this.router.navigate(['/portalcolaborador/home-gerente']);
      } else {
        this.router.navigate(['/portalcolaborador/home-usuario']);
      }
    } else {
      alert('Usuário ou senha incorretos.');
    }
  }
}
