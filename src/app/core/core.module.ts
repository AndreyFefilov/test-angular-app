import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

import { NotFoundComponent } from '@core/components';
import { ViewLayoutComponent } from '@core/containers';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ViewLayoutComponent,
    NotFoundComponent,
  ],
  exports: [
    ViewLayoutComponent,
    NotFoundComponent,
  ],
  providers: [CookieService]
})
export class CoreModule {}