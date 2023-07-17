import { Component, inject, OnInit } from '@angular/core';
import {AuthService} from "@core/services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  a = inject(AuthService);
  title = 'test-angular-app';

  ngOnInit() {
    this.a.logIn().subscribe(e => console.log(e));
  }
}
