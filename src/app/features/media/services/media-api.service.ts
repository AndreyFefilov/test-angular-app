import { inject, Injectable } from '@angular/core';

import { HttpService } from '@core/services';
import { ObservableApiResponse } from '@core/models';
import { MediaList } from '@features/media/models';

@Injectable()
export class MediaApiService {
  private readonly http = inject(HttpService);

  loadMedia(): ObservableApiResponse<MediaList> {
    return this.http.get<MediaList>('media/feed/recommended');
  }
}