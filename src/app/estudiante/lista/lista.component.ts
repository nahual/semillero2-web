import { Component, OnInit } from '@angular/core';

import { EstudianteService } from '../estudiante.service';
import { IEstudiante } from '../../shared/interfaces';

@Component({
  selector: 'app-estudiante-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class EstudianteListaComponent implements OnInit {
  public estudiantes: IEstudiante[];

  public totalRecords = 0;
  public pageSize = 2;

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit() {
    this.getEstudiantesPage(0);
  }

  pageChanged(page: number) {
      this.getEstudiantesPage(page);
  }

  getEstudiantesPage(page: number): void {
    this.estudianteService.getEstudiantes((page - 1) * this.pageSize, this.pageSize).subscribe(
      response => {
        this.totalRecords = response.totalRecords;
        this.estudiantes = response.results;
      }
    )
  }

}
