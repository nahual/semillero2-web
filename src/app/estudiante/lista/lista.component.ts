import { Component, OnInit } from '@angular/core';

import { EstudianteService } from '../estudiante.service';

@Component({
  selector: 'app-estudiante-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class EstudianteListaComponent implements OnInit {
  public estudiantes: any[];

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit() {
    this.getEstudiantes();
  }

  getEstudiantes(): void {
    this.estudianteService.getEstudiantes().subscribe(
      res => this.estudiantes = res
    )
  }

}
