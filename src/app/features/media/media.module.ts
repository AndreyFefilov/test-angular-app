import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MediaRoutingModule } from '@features/media/media-routing.module';
import { MediaApiService } from '@features/media/services';
import { effectsForFeature, MEDIA_FEATURE_NAME, reducers } from '@features/media/feature-state';
import { SharedModule } from '@shared/shared.module';
import { MediaComponent } from './containers/media.component';

@NgModule({
  declarations: [
    MediaComponent
  ],
  imports: [
    MediaRoutingModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature(MEDIA_FEATURE_NAME, reducers),
    EffectsModule.forFeature(effectsForFeature),
  ],
  providers: [MediaApiService]
})
export class MediaModule { }
