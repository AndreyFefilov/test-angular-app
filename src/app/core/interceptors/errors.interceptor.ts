import { inject, Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { catchError, Observable } from 'rxjs';

import { ErrorsHandlerService } from '@core/services/errors-handler.service';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
  private readonly errorsHandlerService = inject(ErrorsHandlerService);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => this.errorsHandlerService.handleError(error))
    )
  }
}
