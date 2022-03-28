import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigationState } from '../models/navigation-state.enum';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  navigationState$: BehaviorSubject<NavigationState> =
    new BehaviorSubject<NavigationState>(NavigationState.Overview);

  constructor() {}

  navigateForward(): void {
    this.navigationState$.next(this.navigationState$.value + 1);
  }
}
