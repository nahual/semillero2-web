import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaListaComponent } from './lista/lista.component';
import { EmpresaAltaComponent } from './alta/alta.component';

import { EmpresaService } from './empresa.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [EmpresaListaComponent, EmpresaAltaComponent],
  providers: [
    EmpresaService
  ]
})
export class EmpresaModule { }