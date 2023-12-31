import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaComponent } from '@features/media/containers/media.component';

const MEDIA_ROUTES: Routes = [
  {
    path: '',
    component: MediaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(MEDIA_ROUTES)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
