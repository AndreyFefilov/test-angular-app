import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { select, Store } from '@ngrx/store';
import { TuiButtonModule, TuiHintModule } from '@taiga-ui/core';
import { Observable } from 'rxjs';

import { RoutesPathsEnum } from '@core/enums';
import { GoBackDirective } from '@shared/directives';
import { selectLoggedIn } from '@state/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, TuiButtonModule, TuiHintModule, GoBackDirective],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly location = inject(Location);
  private readonly store = inject(Store);

  readonly isLoggedIn = toSignal(this.store.pipe(select(selectLoggedIn)));

  readonly canShowBackButton = toSignal(
    new Observable<boolean>((subscriber) => {
      this.location.onUrlChange((urlPath) => {
        const canShow =
          !urlPath.includes(RoutesPathsEnum.Login) && !urlPath.includes(RoutesPathsEnum.Home);
        subscriber.next(canShow);
      });
    })
  );
}
