import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { IPagedResults } from '../shared/interfaces';

import { Empresa } from './empresa';

@Injectable()
export class EmpresaService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEmpresas(page: number, pageSize: number): Observable<IPagedResults<Empresa[]>> {
    const url = `${this.apiUrl}/company?page=${page}&size=${pageSize}`;

    return this.http.get<Empresa[]>(url)
      .pipe(
        map(res => {
          const totalRecords = res["totalElements"];
          const empresa = res["content"] as Empresa[];

          return {
            results: empresa,
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
