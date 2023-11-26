// home-gerente.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-gerente',
  templateUrl: './home-gerente.component.html',
  styleUrls: ['./home-gerente.component.css'],
})
export class HomeGerenteComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isGerente()) {
      // Se não for um gerente, redirecione para a página do usuário comum
      this.router.navigate(['/portalcolaborador/home-gerente']);
    }
  }
}
