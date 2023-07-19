import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { select, Store } from '@ngrx/store';
import { TuiButtonModule, TuiHintModule } from '@taiga-ui/core';
import { Observable } from 'rxjs';

import { RoutesPathsEnum } from '@core/enums';
import { GoBackDirective } from '@shared/directives';
import { selectLoggedIn } from '@state/auth';
import { AppState } from '@state/index';
import { AuthActions } from '@state/auth';
import { selectHeaderTitle } from '@state/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiHintModule,
    GoBackDirective
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly location = inject(Location);
  private readonly store = inject(Store<AppState>);

  readonly isLoggedIn = toSignal(this.store.pipe(select(selectLoggedIn)));
  readonly headerTitle = toSignal(this.store.pipe(select(selectHeaderTitle)));

  readonly canShowBackButton = toSignal(
    new Observable<boolean>((subscriber) => {
      this.location.onUrlChange((urlPath) => {
        const canShow =
          !urlPath.endsWith(RoutesPathsEnum.Login) && !urlPath.endsWith(RoutesPathsEnum.Home);
        subscriber.next(canShow);
      });
    })
  );

  logOut() {
    this.store.dispatch(AuthActions.logOut());
  }
}
