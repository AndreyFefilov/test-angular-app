import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Observable, of, switchMap } from 'rxjs';

import { AuthState, selectLoggedIn } from '@state/auth';
import { RoutesPathsEnum } from '@core/enums';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  private readonly store = inject(Store<AuthState>);
  private readonly router = inject(Router);

  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(selectLoggedIn),
      switchMap((isLoggedIn: boolean) => {
        let canActivate = isLoggedIn;

        if (this.isLoginPage(routerState.url)) {
          canActivate = !isLoggedIn;

          if (!canActivate) {
            this.router.navigate([RoutesPathsEnum.Home]);
          }

          return of(canActivate);
        }

        if (canActivate) {
          return of(true);
        }

        this.router.navigate([RoutesPathsEnum.Login]);
        return of(false);
      })
    )
  }

  private isLoginPage(url: string): boolean {
    return url === `/${RoutesPathsEnum.Login}`;
  }
}
