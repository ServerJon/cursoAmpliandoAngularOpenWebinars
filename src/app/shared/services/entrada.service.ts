import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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

    return this.httpClient.get<Entradas>('assets/json/entradas.json').pipe(
      map((entradas: Entradas) => {

          let entrada: Entrada = {
            id: 0,
            autor: '',
            fecha: '',
            resumen: '',
            titulo: ''
          };

          entradas.data.forEach( (entradaListado: Entrada) => {
            if (entradaListado.id == id) {
              entrada = entradaListado;
            }
          })

          return entrada;
        }
      )
    );
  }
}
