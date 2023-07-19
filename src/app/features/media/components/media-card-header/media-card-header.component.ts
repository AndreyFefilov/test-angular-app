import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { MediaItem } from '@features/media/models';
import { User } from '@core/models';

@Component({
  selector: 'app-media-card-header',
  templateUrl: './media-card-header.component.html',
  styleUrls: ['./media-card-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaCardHeaderComponent {
  @Input({ required: true })
  mediaItem!: MediaItem;

  get authorData(): User {
    return this.mediaItem.author;
  }
}
