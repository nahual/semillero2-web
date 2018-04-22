import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Authorization': 'Basic c2VtaWxsZXJvOnNlbWlsbGVybw==' })
};

@Injectable()
export class EstudianteService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<any[]> {
    const url = `${this.apiUrl}/student`;

    return this.http.get<any[]>(url, httpOptions)
      .pipe(
        // map(res => res),
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
