import { inject, Injectable } from '@angular/core';

import {select, Store} from '@ngrx/store';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { RouterNavigatedAction } from '@ngrx/router-store/src/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, filter, first, map, of, switchMap, tap} from 'rxjs';

import { loadMedia, loadMediaFailure, loadMediaSuccess, MediaActionsUnion } from './media.actions';
import { MediaApiService } from '@features/media/services';
import { selectMediaList } from '@features/media/feature-state/media.reducer';
import { MediaActions, MediaState } from '@features/media/feature-state';
import { RoutesPathsEnum } from '@core/enums';

@Injectable()
export class MediaEffects {
  private readonly store = inject(Store<MediaState>);
  private readonly actions$ = inject(Actions<MediaActionsUnion> );
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
      ofType<RouterNavigatedAction>(ROUTER_NAVIGATED),
      filter(({ payload }: RouterNavigatedAction) =>
        payload.event.url.endsWith(RoutesPathsEnum.Feed)
      ),
      switchMap(() => this.store.pipe(
          select(selectMediaList),
          first()
        )
      ),
      filter((media) => Array.isArray(media) && !media.length),
      map((media) => MediaActions.loadMedia())
    )
  });
}
