import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MediaItem } from '@features/media/models';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaCardComponent {
  @Input({ required: true })
  mediaItem!: MediaItem;
}
