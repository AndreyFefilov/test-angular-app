import { Component } from '@angular/core';

import { HeaderComponent } from '@core/layout/components';

@Component({
  selector: 'app-view-layout',
  templateUrl: './view-layout.component.html',
  styleUrls: ['./view-layout.component.scss'],
  imports: [HeaderComponent],
  standalone: true,
})
export class ViewLayoutComponent {
}
