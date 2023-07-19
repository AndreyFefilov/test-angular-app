import { Component } from '@angular/core';
import {RoutesPathsEnum} from "@core/enums";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly mediaRoutePath = `/${RoutesPathsEnum.Feed}`;
}
