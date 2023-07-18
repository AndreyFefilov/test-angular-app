import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CookieService } from 'ngx-cookie-service';
import {TuiAlertService, TuiNotification } from '@taiga-ui/core';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from '@core/services';
import { RoutesPathsEnum } from '@core/enums';
import { AuthData } from '@core/models';
import { logIn, logInFailure, logInSuccess } from './auth.actions';

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions);
  private readonly authService = inject(AuthService);
  private readonly cookieService = inject(CookieService);
  private readonly alertService = inject(TuiAlertService);
  private readonly router = inject(Router);

  readonly login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logIn),
      switchMap(() => this.authService.logIn().pipe(
        map((response) => response.data),
        map((authData) => logInSuccess({ authData })),
        catchError(() => {
          this.alertService.open('Не удалось войти в систему', { status: TuiNotification.Error }).subscribe();
          return of(logInFailure());
        })
      ))
    )
  });

  readonly loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logInSuccess),
      map((payload: { authData: AuthData }) => payload.authData),
      tap(({ access_token, refresh_token }) => {
        this.cookieService.set('access_token', access_token);
        this.cookieService.set('refresh_token', refresh_token);
        this.router.navigateByUrl('/' + RoutesPathsEnum.Home);
      }),
    )
  },{ dispatch: false });
}
