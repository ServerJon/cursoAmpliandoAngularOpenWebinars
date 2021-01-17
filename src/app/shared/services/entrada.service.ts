import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  public editarEntrada(entrada: Entrada): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post<any>('https://jsonplaceholder.typicode.com/posts', entrada, { headers });
  }
}
