import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {TUI_BUTTON_OPTIONS, TUI_SANITIZER, TuiAlertModule} from '@taiga-ui/core';
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n';
import { of } from 'rxjs';

import { NotFoundComponent } from '@core/layout/components';
import { ViewLayoutComponent } from '@core/layout/containers';
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
    },
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer
    },
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_RUSSIAN_LANGUAGE),
    },
    {
      provide: TUI_BUTTON_OPTIONS,
      useValue: {
        appearance: 'flat',
        size: 's',
      },
    },
  ]
})
export class CoreModule {}