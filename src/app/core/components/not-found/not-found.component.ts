import { Component } from '@angular/core';

import { TuiBlockStatusModule } from '@taiga-ui/layout';
import { TuiButtonModule } from '@taiga-ui/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  imports: [TuiBlockStatusModule, TuiButtonModule],
  standalone: true
})
export class NotFoundComponent {
}
