import { inject, Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';

import { AuthActions } from '@state/auth';
import { setLoadingInProcess } from './loading-process.actions';

const START_LOADING_ACTIONS = [
  AuthActions.logIn
];

const STOP_LOADING_ACTIONS = [
  AuthActions.logInSuccess,
  AuthActions.logInFailure
];

@Injectable()
export class LoadingProcessEffects {
  private readonly actions$ = inject(Actions);

  readonly startLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(...START_LOADING_ACTIONS),
      map(() => setLoadingInProcess({ isLoading: true }))
    )
  );

  readonly stopLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(...STOP_LOADING_ACTIONS),
      map(() => setLoadingInProcess({ isLoading: false }))
    )
  );
}
