import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/shared/classes/usuario';
import { LoginService } from 'src/app/shared/services/login.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Atributos
  public usuario: Usuario

  constructor(
    private loginService: LoginService,
    private router: Router,
    private tokenService: TokenService) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  public submit(): void {

    this.loginService.login(this.usuario).subscribe(
      (data: number) => {
        this.tokenService.setToken(data);

        this.tokenService.setNombreUsuario(this.usuario.nombre);

        this.router.navigate(['/dashboard']);
      },
      (error: Error) => {
        console.error("Error al realizar el acceso");
      }
    )
  }

}
