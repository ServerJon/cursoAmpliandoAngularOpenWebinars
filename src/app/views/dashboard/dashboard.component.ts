import { Component, OnInit } from '@angular/core';
import { Entrada, Entradas } from 'src/app/shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Atributo
  public listadoEntradas: Entrada[];

  constructor(private entradaService: EntradaService) {
    this.listadoEntradas = [];
  }

  ngOnInit(): void {

    this.listarEntradas();
  }

  private listarEntradas(): void {

    this.entradaService.recuperarEntradas().subscribe(
      (entradas: Entradas) => {
        this.listadoEntradas = [...entradas.data];
      }
    )
  }
}
