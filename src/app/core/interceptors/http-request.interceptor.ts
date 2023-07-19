import {inject, Injectable} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from '@core/services';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private readonly authService = inject(AuthService);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = this.authService.setAuthorizationHeader(request);

    return next.handle(request);
  }
}