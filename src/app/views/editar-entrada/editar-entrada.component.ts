import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Entrada } from 'src/app/shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-editar-entrada',
  templateUrl: './editar-entrada.component.html',
  styleUrls: ['./editar-entrada.component.css']
})
export class EditarEntradaComponent implements OnInit {
  // Atributos
  public id: number;
  public entrada: Entrada;
  public formEntrada: FormGroup

  constructor(private activatedRoute: ActivatedRoute, private entradaService: EntradaService,
    private formBuilder: FormBuilder, private router: Router) {
    this.id = 0;
    this.entrada = {
      id: 0,
      title: '',
      body: '',
      autor: '',
      fecha: '',
      userId: 0
    };
    this.formEntrada = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', [Validators.required, Validators.minLength(10)]],
      fecha: ['', Validators.required],
      autor: ['', Validators.required]
    });

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

        this.formEntrada.get('title')?.setValue(this.entrada.title);
        this.formEntrada.get('body')?.setValue(this.entrada.body);
        this.formEntrada.get('fecha')?.setValue(this.entrada.fecha);
        this.formEntrada.get('autor')?.setValue(this.entrada.autor);
      }
    )
  }

  public editarEntrada(): void {

    this.entradaService.editarEntrada(this.formEntrada.value).subscribe(
      (data) => {
        console.log("Entrada editada: ", data);

        this.router.navigate(['dashboard']);
      },
      (error) => {
        console.error("Error al editar la entrada: ", error);
      }
    )
  }

}
