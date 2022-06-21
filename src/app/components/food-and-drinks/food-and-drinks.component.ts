import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { fadeInOut } from 'src/app/util/fade-in-out.animation';

@Component({
  selector: 'app-food-and-drinks',
  templateUrl: './food-and-drinks.component.html',
  styleUrls: ['./food-and-drinks.component.scss'],
  animations: [fadeInOut],
})
export class FoodAndDrinksComponent implements OnInit {
  isTableDisplayed: boolean = false;
  isSaladDisplayed: boolean = false;
  isBottleDisplayed: boolean = false;
  isBigBottleDisplayed: boolean = false;
  isChickenDisplayed: boolean = false;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    setTimeout(() => (this.isTableDisplayed = true), 2000);
    setTimeout(() => (this.isBottleDisplayed = true), 3000);
    setTimeout(() => (this.isBigBottleDisplayed = true), 4000);
    setTimeout(() => (this.isSaladDisplayed = true), 2500);
    setTimeout(() => (this.isChickenDisplayed = true), 3500);
  }

  onNavigateForward(): void {
    this.navigationService.navigateForward();
  }
}
