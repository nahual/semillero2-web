import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteListaComponent } from './lista/lista.component';
import { EstudianteAltaComponent } from './alta/alta.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EstudianteListaComponent, EstudianteAltaComponent]
})
export class EstudianteModule { }
