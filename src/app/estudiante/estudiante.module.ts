import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteListaComponent } from './lista/lista.component';
import { EstudianteAltaComponent } from './alta/alta.component';
import { EstudianteService } from './estudiante.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
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
