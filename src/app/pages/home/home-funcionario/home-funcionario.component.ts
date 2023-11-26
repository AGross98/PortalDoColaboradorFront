// home-gerente.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-funcionario',
  templateUrl: './home-funcionario.component.html',
  styleUrls: ['./home-funcionario.component.css'],
})
export class HomeFuncionarioComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isGerente()) {
      // Se não for um gerente, redirecione para a página do usuário comum
      this.router.navigate(['/portalcolaborador/home-usuario']);
    }
  }
}
