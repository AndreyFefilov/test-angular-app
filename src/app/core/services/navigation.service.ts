import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  constructor(
    private readonly router: Router,
    private readonly location: Location
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.navigationHistory.push((event as NavigationEnd).urlAfterRedirects);
    });
  }

  private navigationHistory: string[] = [];

  back() {
    this.navigationHistory.pop();
    this.navigationHistory.length ? this.location.back() : this.router.navigateByUrl('/');
  }
}