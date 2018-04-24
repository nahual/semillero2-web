import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Basic c2VtaWxsZXJvOnNlbWlsbGVybw==' })
    };

    const clonedRequest = req.clone(httpOptions);

    return next.handle(clonedRequest);
  }
}
