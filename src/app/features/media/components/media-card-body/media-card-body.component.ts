import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit, TemplateRef, ViewChild,
} from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { TuiDialogContext } from '@taiga-ui/core';
import { TuiPreviewDialogService } from '@taiga-ui/addon-preview';

import { MediaItem } from '@features/media/models';
import { getNumberOfTextLines } from '@core/utils';

interface StatisticsBadge {
  text: string | null;
  icon: string;
  hint: string;
}

const DEFAULT_LINES_LIMIT = 2;

@Component({
  selector: 'app-media-card-body',
  templateUrl: './media-card-body.component.html',
  styleUrls: ['./media-card-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaCardBodyComponent implements OnInit {
  @ViewChild('video')
  readonly videoPreview?: TemplateRef<TuiDialogContext>;

  @Input({ required: true })
  mediaItem!: Omit<MediaItem, 'author' | 'created_at'>;

  private readonly decimalPipe = inject(DecimalPipe);
  private readonly previewDialogService = inject(TuiPreviewDialogService);

  statisticsBadges: StatisticsBadge[];
  descriptionLinesLimit = DEFAULT_LINES_LIMIT;

  get descriptionIsCollapsed(): boolean {
    return this.descriptionLinesLimit === DEFAULT_LINES_LIMIT;
  }

  get canDisplayShowMoreBtn(): boolean {
    return getNumberOfTextLines('.description__clamp div.t-wrapper') > DEFAULT_LINES_LIMIT;
  }

  ngOnInit() {
    this.statisticsBadges = [
      {
        text: this.decimalPipe.transform(this.mediaItem.counters.likes),
        icon: 'tuiIconHeart',
        hint: 'Поставлено лайков'
      },
      {
        text: this.decimalPipe.transform(this.mediaItem.counters.comments),
        icon: 'tuiIconMessageSquare',
        hint: 'Оставлено комментариев'
      },
      {
        text: this.decimalPipe.transform(this.mediaItem.counters.reposts),
        icon: 'tuiIconCornerUpRight',
        hint: 'Сделано репостов'
      },
    ]
  }

  toggleShowMoreDescription() {
    this.descriptionLinesLimit = this.descriptionIsCollapsed ? 10 : DEFAULT_LINES_LIMIT;
  }

  openVideo() {
    this.previewDialogService.open(this.videoPreview).subscribe();
  }
}
