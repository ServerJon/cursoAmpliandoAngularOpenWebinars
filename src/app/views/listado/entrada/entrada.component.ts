import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Entrada } from 'src/app/shared/interfaces/entrada';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  // Atributos
  @Input()
  public entrada: Entrada;
  @Output()
  public onDoEvent: EventEmitter<number>;

  constructor() {
    this.entrada = {
      id: 0,
      titulo: '',
      resumen: '',
      fecha: '',
      autor: ''
    };
    this.onDoEvent = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  public doEvent(): void {
    this.onDoEvent.emit(this.entrada.id);
  }

  public modificarClase(): any {
    return {
      'claro': this.entrada.id % 2 == 0,
      'oscuro': this.entrada.id % 2 != 0
    }
  }

}
