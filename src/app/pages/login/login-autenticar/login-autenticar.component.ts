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
    const usuario: Usuario = {
      user: this.usuario,
      senha: this.senha,
      funcionario: { nome: '', cpf: '', status: 0, cargo: 0 } // Certifique-se de incluir o campo 'cargo'
    };

// login-autenticar.component.ts
// login-autenticar.component.ts
// login-autenticar.component.ts
this.authService.login(usuario).subscribe(
  (response) => {
    console.log('Resposta do login:', response);

    if (this.authService.isGerente()) {
      console.log('O usuário é um gerente. Redirecionando para a página do gerente.');
      this.router.navigate(['/portalcolaborador/home-gerente']);
    } else {
      console.log('O usuário NÃO é um gerente. Redirecionando para a página do usuário normal.');
      this.router.navigate(['/portalcolaborador/home-usuario']);
    }
  },
  (error) => {
    console.error('Erro durante a autenticação:', error);
    alert('Usuário ou senha incorretos.');
  }
);




  }
}
