import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteListaComponent } from './lista/lista.component';
import { EstudianteAltaComponent } from './alta/alta.component';
import { EstudianteService } from './estudiante.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EstudianteListaComponent,
    EstudianteAltaComponent
  ],
  providers: [
    EstudianteService
  ]
})
export class EstudianteModule { }
