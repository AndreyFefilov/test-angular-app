import { inject, Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { map } from 'rxjs';

import { setHeaderTitle } from '@state/header/header.actions';
import { HeaderState } from '@state/header/header.state';

@Injectable()
export class HeaderEffects {
  private readonly actions$ = inject(Actions<HeaderState>);

  readonly navigationEnd$ = createEffect(() =>
    this.actions$.pipe(
      ofType<RouterNavigatedAction>(ROUTER_NAVIGATED),
      map((action) => action.payload.routerState.root.firstChild?.title),
      map((headerTitle: string | undefined) => setHeaderTitle({ headerTitle }))
    )
  );
}