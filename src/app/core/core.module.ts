import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';

import { TuiAlertModule } from '@taiga-ui/core';
import { NotFoundComponent } from '@core/components';
import { ViewLayoutComponent } from '@core/containers';
import { ErrorsInterceptor, HttpRequestInterceptor } from '@core/interceptors';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ViewLayoutComponent,
    NotFoundComponent,
    TuiAlertModule
  ],
  exports: [
    ViewLayoutComponent,
    NotFoundComponent,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorsInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}