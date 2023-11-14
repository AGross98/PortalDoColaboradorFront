import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login-cadastrar',
  templateUrl: './login-cadastrar.component.html',
  styleUrls: ['./login-cadastrar.component.css']
})
export class LoginCadastrarComponent {

  cpf!: number;
  user!: string;
  senha!: string;



  CadastrarUsuario(){
    const usuario : Usuario = {
      cpf : this.cpf,
      user : this.user,
      senha : this.senha
    }
    console.log(usuario)
  }

}
