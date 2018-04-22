import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodoListaComponent } from './lista/lista.component';
import { NodoAltaComponent } from './alta/alta.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NodoListaComponent, NodoAltaComponent]
})
export class NodoModule { }
