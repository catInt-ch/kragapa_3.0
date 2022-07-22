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
            document.body.style.overflowY = "hidden";
            break;
          case '/motto':
            this.navigationState$.next(NavigationState.Motto);
            document.body.style.overflowY = "hidden";
            break;
          case '/foods-drinks':
            this.navigationState$.next(NavigationState.FoodAndDrinks);
            document.body.style.overflowY = "hidden";
            break;
          case '/sign':
            this.navigationState$.next(NavigationState.Sign);
            document.body.style.overflowY = "hidden";
            break;
          case '/sign-up':
            this.navigationState$.next(NavigationState.SignUp);
            break;
          case '/staff-only':
            this.navigationState$.next(NavigationState.StaffOnly);
            document.body.style.overflowY = "hidden";
            break;
          case '/checklist':
            this.navigationState$.next(NavigationState.UserSelector);
            document.body.style.overflowY = "hidden";
            break;
          case '/checklist/nadia':
          case '/checklist/sheila':
          case '/checklist/natha':
          case '/checklist/karin':
            this.navigationState$.next(NavigationState.Checklist);
            document.body.style.overflowY = "hidden";
            break;
          default:
            this.navigationState$.next(NavigationState.Overview);
            document.body.style.overflowY = "hidden";
        }
        setTimeout(() => (document.body.scrollTop = document.documentElement.scrollTop = 0), 50)
      }
    });
  }

  navigateForward(): void {
    this.navigationState$.next((this.navigationState$.value + 1) % 5);
  }

  navigateBack(): void {
    this.navigationState$.next((this.navigationState$.value - 1) % 5);
  }
}
