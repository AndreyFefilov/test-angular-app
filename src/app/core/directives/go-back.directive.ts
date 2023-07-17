import { Directive, HostListener, inject } from '@angular/core';

import { NavigationService } from '@core/services';

@Directive({
  selector: '[goBackButton]',
  standalone: true
})
export class GoBackDirective {
  private readonly navigationService = inject(NavigationService);

  @HostListener('click')
  onClick() {
    this.navigationService.back();
  }
}