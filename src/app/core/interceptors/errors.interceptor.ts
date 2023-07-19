import { inject, Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import {catchError, Observable, switchMap, throwError} from 'rxjs';

import { AuthService, ErrorsHandlerService } from '@core/services';
import { AuthActions, AuthState } from '@state/auth';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
  private readonly errorsHandlerService = inject(ErrorsHandlerService);
  private readonly authService = inject(AuthService);
  private readonly store = inject(Store<AuthState>);
  private readonly actions$ = inject(Actions);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          const { access_token, refresh_token } = this.authService.getAuthTokens();

          if (access_token && refresh_token) {
            this.store.dispatch(AuthActions.refreshToken({ refreshToken: refresh_token }));

            return this.actions$.pipe(
              ofType(AuthActions.refreshTokenSuccess),
              switchMap(() => next.handle(this.authService.setAuthorizationHeader(request)))
            );
          }

          this.store.dispatch(AuthActions.logOut());

          return throwError(() => error);
        }

        return this.errorsHandlerService.handleError(error);
      })
    )
  }
}
