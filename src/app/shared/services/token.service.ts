import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  // Atributos
  private token: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private nombreUsuario: BehaviorSubject<string> = new BehaviorSubject<string>("");

  // Observables
  public token$: Observable<number> = this.token.asObservable();
  public nombreUsuario$: Observable<string> = this.nombreUsuario.asObservable();

  // Setters
  public setToken(token: number): void {

    this.token.next(token);
  }

  public setNombreUsuario(nombreUsuario: string): void {

    this.nombreUsuario.next(nombreUsuario);
  }
}
