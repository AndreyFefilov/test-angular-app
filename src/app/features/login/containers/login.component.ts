import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { select, Store } from '@ngrx/store';

import { AuthActions, AuthState } from '@state/auth';
import { selectIsDataLoading } from '@state/loading-process';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private readonly store = inject(Store<AuthState>);

  readonly isLoading = toSignal(this.store.pipe(select(selectIsDataLoading)));

  logIn() {
    this.store.dispatch(AuthActions.logIn());
  }
}
