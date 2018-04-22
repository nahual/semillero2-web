import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaListaComponent } from './lista/lista.component';
import { EmpresaAltaComponent } from './alta/alta.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmpresaListaComponent, EmpresaAltaComponent]
})
export class EmpresaModule { }
