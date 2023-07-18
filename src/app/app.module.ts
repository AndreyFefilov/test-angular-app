import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TuiRootModule, TUI_SANITIZER, TUI_BUTTON_OPTIONS } from '@taiga-ui/core';
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { of } from 'rxjs';

import { CoreModule } from '@core/core.module';
import { environment } from '@environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { effects, reducers } from './state';

registerLocaleData(ru, 'ru');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    TuiRootModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru-RU',
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
