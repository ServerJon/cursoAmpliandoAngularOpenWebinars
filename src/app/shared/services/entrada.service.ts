import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Entradas, Entrada } from '../interfaces/entrada';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient: HttpClient) { }

  public recuperarEntradas(): Observable<Entradas> {

    return this.httpClient.get<Entradas>('assets/json/entradas.json');
  }

  public recuperarEntrada(id: number): Observable<Entrada> {

    return this.httpClient.get<Entrada>('assets/json/entradas.json').pipe(
      filter(((entrada: Entrada) => entrada.id == id))
    );
  }
}
