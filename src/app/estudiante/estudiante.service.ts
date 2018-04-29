import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { IEstudiante, IPagedResults } from '../shared/interfaces';

@Injectable()
export class EstudianteService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEstudiantes(page: number, pageSize: number): Observable<IPagedResults<IEstudiante[]>> {
    const url = `${this.apiUrl}/student?page=${page}&size=${pageSize}`;

    return this.http.get<IEstudiante[]>(url)
      .pipe(
        map(res => {
          const totalRecords = res["totalElements"];
          const estudiantes = res["content"] as IEstudiante[];

          return {
            results: estudiantes,
            totalRecords: totalRecords
          };
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An API error ocurred', error);

    if (error.error instanceof Error) {
        let errMessage = error.error.message;
        return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Server error');
  }
}
