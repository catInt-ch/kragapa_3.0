import {
  animate,
  animateChild,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition('* => *', [
        query(':leave', animateChild()),
        query(':enter', animateChild()),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'kragapa3';
}
