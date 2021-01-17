import  { NgModule }  from  '@angular/core';
import  { RouterModule, Routes }  from  '@angular/router';

import { ListadoComponent } from './views/listado/listado.component';
import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { LoginComponent } from './views/login/login.component';
import { DetalleEntradaComponent } from './views/detalle-entrada/detalle-entrada.component';
import { FrontComponent } from './views/front/front.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';


const  routes:  Routes  = [
  { path: 'front', component: FrontComponent, children: [
    { path: 'listado', component: ListadoComponent },
    { path: 'nosotros', component: AcercaDeNosotrosComponent},
    { path: 'detalle-entrada/:id', component: DetalleEntradaComponent},

    {path: '', redirectTo: 'listado', pathMatch: 'full'}
  ]},

  { path: 'login', component: LoginComponent},
  { path: 'dashboard', canActivate: [AuthGuard], loadChildren:
    () => import('src/app/views/dashboard/dashboard.module').then((m) => m.DashboardModule)},

  { path: '', redirectTo: 'front/listado', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export  class  AppRoutingModule  {  }
