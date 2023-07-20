import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit, TemplateRef, ViewChild,
} from '@angular/core';

import { select, Store } from '@ngrx/store';
import { TuiDialogContext } from '@taiga-ui/core';
import { TuiPreviewDialogService } from '@taiga-ui/addon-preview';
import { TuiLineClampComponent } from '@taiga-ui/kit';
import { filter, map, Observable } from 'rxjs';

import { MediaCounters, MediaItem } from '@features/media/models';
import { getMediaCountersById, MediaActions, MediaState } from '@features/media/feature-state';

enum BadgeTypes {
  Likes,
  Comments,
  Reposts
}

interface StatisticsBadge {
  value$: Observable<number | undefined>;
  icon: string;
  hint: string;
  type: BadgeTypes;
  class: string;
}

const DEFAULT_LINES_LIMIT = 2;

@Component({
  selector: 'app-media-card-body',
  templateUrl: './media-card-body.component.html',
  styleUrls: ['./media-card-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaCardBodyComponent implements OnInit, AfterViewInit {
  @ViewChild('video')
  readonly videoPreviewRef?: TemplateRef<TuiDialogContext>;

  @ViewChild('lineClamp')
  readonly lineClampRef?: TuiLineClampComponent;

  @Input({ required: true })
  mediaItem!: Omit<MediaItem, 'author' | 'created_at'>;

  private readonly store = inject(Store<MediaState>);
  private readonly previewDialogService = inject(TuiPreviewDialogService);

  private counters$: Observable<MediaCounters | undefined>;

  statisticsBadges: StatisticsBadge[];
  descriptionLinesLimit = DEFAULT_LINES_LIMIT;
  canDisplayShowMoreBtn: boolean;
  BadgeTypes = BadgeTypes

  get descriptionIsCollapsed(): boolean {
    return this.descriptionLinesLimit === DEFAULT_LINES_LIMIT;
  }

  ngOnInit() {
    this.counters$ = this.store.pipe(
      select(getMediaCountersById(this.mediaItem.media_id)),
      filter((x) => !!x)
    );

    this.statisticsBadges = this.initStatisticsBadges();
  }

  ngAfterViewInit() {
    this.canDisplayShowMoreBtn = !!this.lineClampRef?.computedContent;
  }

  toggleShowMoreDescription() {
    this.descriptionLinesLimit = this.descriptionIsCollapsed ? 10 : DEFAULT_LINES_LIMIT;
  }

  like(badgeType: BadgeTypes) {
    if (badgeType !== BadgeTypes.Likes) {
      return;
    }

    this.store.dispatch(MediaActions.setLike({
      mediaId: this.mediaItem.media_id,
      isLiked: !this.mediaItem.is_liked
    }));
  }

  openVideo() {
    this.previewDialogService.open(this.videoPreviewRef).subscribe();
  }

  private initStatisticsBadges(): StatisticsBadge[] {
    return [
      {
        value$: this.counters$.pipe(map((counters) => counters?.likes)),
        icon: 'tuiIconHeart',
        hint: 'Поставлено лайков',
        type: BadgeTypes.Likes,
        class: 'likes-counter'
      },
      {
        value$: this.counters$.pipe(map((counters) => counters?.comments)),
        icon: 'tuiIconMessageSquare',
        hint: 'Оставлено комментариев',
        type: BadgeTypes.Comments,
        class: 'comments-counter'
      },
      {
        value$: this.counters$.pipe(map((counters) => counters?.reposts)),
        icon: 'tuiIconCornerUpRight',
        hint: 'Сделано репостов',
        type: BadgeTypes.Reposts,
        class: 'reposts-counter'
      },
    ];
  }
}
