import {
  animate,
  animateChild,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

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
export class AppComponent implements OnInit {
  title = 'kragapa3';
  isHomeDisplayed: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart && event.url !== '/sign-up') {
        this.isHomeDisplayed = true;
      } else if (event instanceof NavigationEnd) {
        if (event.url === '/sign-up') {
          setTimeout(() => {
            this.isHomeDisplayed = false;
          }, 1500);
        }
      }
    });
  }
}
