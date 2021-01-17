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
  public onDoEvent: EventEmitter<string>;

  constructor() {
    this.entrada = {
      id: 0,
      titulo: '',
      resumen: ''
    };
    this.onDoEvent = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  public doEvent(): void {
    this.onDoEvent.emit(this.entrada.titulo);
  }

  public modificarClase(): any {
    return {
      'claro': this.entrada.id % 2 == 0,
      'oscuro': this.entrada.id % 2 != 0
    }
  }

}
