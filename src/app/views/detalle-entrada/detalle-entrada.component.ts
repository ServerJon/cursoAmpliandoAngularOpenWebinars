import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Entrada } from 'src/app/shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-detalle-entrada',
  templateUrl: './detalle-entrada.component.html',
  styleUrls: ['./detalle-entrada.component.css']
})
export class DetalleEntradaComponent implements OnInit {
  // Atributos
  private id: number;
  public entrada: Entrada;

  constructor(private activatedRoute: ActivatedRoute, private entradaService: EntradaService) {
    this.id = 0;
    this.entrada = {
      id: 0,
      title: '',
      body: '',
      autor: '',
      fecha: '',
      userId: 0
    };

		this.activatedRoute.params.subscribe( paramsUrl => {
			this.id = +paramsUrl.id;
		});
	}

  ngOnInit(): void {

    this.recuperarEntrada();
  }

  private recuperarEntrada(): void {

    this.entradaService.recuperarEntrada(this.id).subscribe(
      (data: Entrada) => {
        this.entrada = data;
      }
    )
  }

}
