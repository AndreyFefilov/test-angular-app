import { inject, Injectable } from '@angular/core';

import {select, Store} from '@ngrx/store';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, of, switchMap, tap} from 'rxjs';

import { loadMedia, loadMediaFailure, loadMediaSuccess } from './media.actions';
import { MediaApiService } from '@features/media/services';
import { selectMediaList } from '@features/media/feature-state/media.reducer';
import { MediaActions, MediaState } from '@features/media/feature-state';

@Injectable()
export class MediaEffects {
  private readonly store = inject(Store<MediaState>);
  private readonly actions$ = inject(Actions);
  private readonly mediaApiService = inject(MediaApiService);

  readonly loadMedia$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadMedia),
      switchMap(() => this.mediaApiService.loadMedia().pipe(
        map((response) => response.data.media),
        map((media) => loadMediaSuccess({ media })),
        catchError(() => of(loadMediaFailure()))
      ))
    )
  });

  readonly mediaNavigatedEnd$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      switchMap(() => this.store.pipe(select(selectMediaList))),
      map((payload) => 'media' in payload ? payload.media : payload),
      tap((media) => {
        if (Array.isArray(media) && !media.length) {
          this.store.dispatch(MediaActions.loadMedia());
        }
      })
    )
  }, { dispatch: false });
}
