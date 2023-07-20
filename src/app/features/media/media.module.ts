import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TuiScrollbarModule } from '@taiga-ui/core';
import {
  TuiAvatarModule,
  TuiBadgeModule,
  TuiElasticContainerModule,
  TuiLineClampModule
} from '@taiga-ui/kit';
import { TuiPreviewModule } from '@taiga-ui/addon-preview';
import { TuiMediaModule } from '@taiga-ui/cdk';

import { MediaRoutingModule } from '@features/media/media-routing.module';
import { MediaApiService } from '@features/media/services';
import { effectsForFeature, MEDIA_FEATURE_NAME, mediaReducer } from '@features/media/feature-state';
import { SharedModule } from '@shared/shared.module';
import { MediaComponent } from '@features/media/containers/media.component';
import {
  MediaCardBodyComponent,
  MediaCardHeaderComponent,
  MediaCardComponent
} from '@features/media/components';

@NgModule({
  declarations: [
    MediaComponent,
    MediaCardComponent,
    MediaCardHeaderComponent,
    MediaCardBodyComponent
  ],
  imports: [
    MediaRoutingModule,
    CommonModule,
    SharedModule,
    TuiScrollbarModule,
    TuiAvatarModule,
    TuiElasticContainerModule,
    TuiLineClampModule,
    TuiBadgeModule,
    TuiLineClampModule,
    TuiMediaModule,
    StoreModule.forFeature(MEDIA_FEATURE_NAME, mediaReducer),
    EffectsModule.forFeature(effectsForFeature),
    TuiPreviewModule,
  ],
  providers: [MediaApiService]
})
export class MediaModule { }
