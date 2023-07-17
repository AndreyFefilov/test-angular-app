import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { CommonModule, Location } from '@angular/common';

import { Observable } from 'rxjs';
import { TuiButtonModule, TuiHintModule } from '@taiga-ui/core';

import { GoBackDirective } from '@core/directives';
import {RoutesPathsEnum} from "@core/enums";

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

  canShowBackButton$ = new Observable<boolean>((subscriber) => {
    this.location.onUrlChange((urlPath) => {
      const canShow = !urlPath.includes(RoutesPathsEnum.Auth) && !urlPath.includes(RoutesPathsEnum.Home);
      subscriber.next(canShow);
    });
  })
}
