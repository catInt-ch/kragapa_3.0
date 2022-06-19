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
  isDisplayed: boolean = false;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    setTimeout(() => (this.isDisplayed = true), 2000);
  }

  onNavigateForward(): void {
    this.navigationService.navigateForward();
  }
}
