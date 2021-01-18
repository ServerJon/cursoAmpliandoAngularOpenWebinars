import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  // Atributos
  private token: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  // Observables
  public token$: Observable<number> = this.token.asObservable();

  // Setters
  public setToken(token: number): void {

    this.token.next(token);
  }
}
