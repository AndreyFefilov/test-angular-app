import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'

import { select, Store } from '@ngrx/store'

import { MediaState, selectMediaList, MediaActions } from '@features/media/feature-state'
import { MediaItem } from '@features/media/models';
import { selectIsDataLoading } from '@state/loading-process';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaComponent {
  private readonly store = inject(Store<MediaState>);

  readonly mediaList = toSignal(this.store.pipe(select(selectMediaList)));
  readonly isLoading = toSignal(this.store.pipe(select(selectIsDataLoading)));
  readonly mediaCount = computed(() => this.mediaList()?.length ?? 0);

  executeAction() {
    this.mediaCount() > 0
      ? this.store.dispatch(MediaActions.clearMedia())
      : this.store.dispatch(MediaActions.loadMedia());
  }

  trackMediaById(index: number, item: MediaItem): string {
    return item.media_id;
  }
}
