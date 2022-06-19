import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NavigationState } from '../models/navigation-state.enum';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  navigationState$: BehaviorSubject<NavigationState> =
    new BehaviorSubject<NavigationState>(NavigationState.Overview);

  constructor(private router: Router) {
    this.router.events.subscribe((routeEvent) => {
      if (routeEvent instanceof NavigationEnd) {
        switch (routeEvent.url) {
          case '/':
            this.navigationState$.next(NavigationState.Overview);
            break;
          case '/motto':
            this.navigationState$.next(NavigationState.Motto);
            break;
          case '/foods-drinks':
            this.navigationState$.next(NavigationState.FoodAndDrinks);
            break;
          case '/map':
            this.navigationState$.next(NavigationState.Map);
            break;
          default:
            this.navigationState$.next(NavigationState.Overview);
        }
      }
    });
  }

  navigateForward(): void {
    this.navigationState$.next((this.navigationState$.value + 1) % 4);
  }
}
