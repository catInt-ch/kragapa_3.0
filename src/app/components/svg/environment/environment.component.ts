import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationState } from 'src/app/models/navigation-state.enum';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss'],
})
export class EnvironmentComponent implements OnInit {
  @Input() width: number = 1859;
  @Input() height: number = 1153;

  aspectRatio: number;

  navigationStateSubscription: Subscription;

  @ViewChild('environment') environmentElRef: ElementRef;

  constructor(private router: Router, private navgigationService: NavigationService) {}

  ngOnInit(): void {
    this.aspectRatio = this.width / this.height;
    this.width = window.innerWidth;
    this.height = this.width * this.aspectRatio;

    this.navigationStateSubscription = this.navgigationService.navigationState$.subscribe(state => {
      switch(state) {
        case NavigationState.Overview:
          this.reset();
          break;
        case NavigationState.Motto:
          this.zoomIn();
          break;
        case NavigationState.FoodAndDrinks:
          this.navigateFoodAndDrinks();
          break;
        case NavigationState.Map:
          this.showMap();
          break;
      }
    })
  }

  reset(): void {
    console.log('RESET...');
  }

  zoomIn(): void {
    const svg = this.environmentElRef.nativeElement as SVGElement;
    this.height = window.innerHeight;
    this.width = this.height * this.aspectRatio;
    svg.style.transform = 'scale(5) translateY(-40%)';
    this.router.navigate(['/', 'motto']);
  }

  navigateFoodAndDrinks(): void {
    throw new Error('not yet implemented');
  }

  showMap(): void {
    throw new Error('not yet implemented');
  }
}
