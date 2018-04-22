import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NodoListaComponent } from './nodo/lista/lista.component'
import { EmpresaListaComponent } from './empresa/lista/lista.component'
import { EstudianteListaComponent } from './estudiante/lista/lista.component'

const appRoutes: Routes = [
  { path: '', redirectTo: '/nodos', pathMatch: 'full' },
  { path: 'nodos', component: NodoListaComponent },
  { path: 'empresas', component: EmpresaListaComponent },
  { path: 'estudiantes', component: EstudianteListaComponent },
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
