import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class ProductInterceptorService implements HttpInterceptor{

  constructor(private tokenService: TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let interceptedRequest = req;
    const token = this.tokenService.getToken();
    if(token != null){
      interceptedRequest = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
    }
    return next.handle(interceptedRequest);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS,
    useClass: ProductInterceptorService,
    multi: true }];