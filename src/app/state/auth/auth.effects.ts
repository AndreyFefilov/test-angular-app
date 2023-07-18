import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';
import { catchError, first, map, of, switchMap, tap } from 'rxjs';

import { AuthService } from '@core/services';
import { RoutesPathsEnum } from '@core/enums';
import { AuthData } from '@core/models';
import {logIn, logInFailure, logInSuccess, logOut, refreshToken} from './auth.actions';

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions);
  private readonly authService = inject(AuthService);
  private readonly alertService = inject(TuiAlertService);
  private readonly router = inject(Router);

  readonly logIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logIn),
      switchMap(() => this.authService.logIn().pipe(
        map((response) => response.data),
        map((authData) => logInSuccess({ authData })),
        catchError(() => {
          this.alertService
            .open('Не удалось войти в систему', { status: TuiNotification.Error })
            .pipe(first())
            .subscribe();
          return of(logInFailure());
        })
      ))
    )
  });

  readonly logInSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logInSuccess),
      map((payload: { authData: AuthData }) => payload.authData),
      tap(({ access_token, refresh_token }) => {
        this.authService.saveAuthTokens({ access_token, refresh_token });
        this.router.navigate([RoutesPathsEnum.Home]);
      }),
    )
  },{ dispatch: false });

  readonly logOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logOut),
      tap(() => {
        this.authService.logOut();
        this.router.navigate([RoutesPathsEnum.Login]);
      })
    )
  },{ dispatch: false });

  readonly refreshToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(refreshToken),
      switchMap(({ refresh_token }) => this.authService.refreshAccessToken(refresh_token).pipe(
        map((response) => response.data),
        map((authData) => logInSuccess({ authData })),
        catchError(() => {
          this.alertService
            .open('Не удалось обновить токен', { status: TuiNotification.Error })
            .pipe(first())
            .subscribe();
          return of(logInFailure());
        })
      ))
    )
  },{ dispatch: false });
}
