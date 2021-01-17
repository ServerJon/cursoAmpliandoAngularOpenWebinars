import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { EditarEntradaComponent } from '../editar-entrada/editar-entrada.component';

@NgModule({
  declarations: [DashboardComponent, EditarEntradaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DashboardComponent},
      { path: 'editar-entrada/:id', component: EditarEntradaComponent}
    ]),
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
