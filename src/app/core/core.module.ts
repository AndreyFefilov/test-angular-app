import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NotFoundComponent } from '@core/components';
import { ViewLayoutComponent } from '@core/containers';
import { GoBackDirective } from '@core/directives';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ViewLayoutComponent,
    NotFoundComponent,
    GoBackDirective
  ],
  exports: [
    ViewLayoutComponent,
    NotFoundComponent,
    GoBackDirective
  ],
})
export class CoreModule {}