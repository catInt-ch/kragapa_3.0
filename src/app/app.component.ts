import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kragapa3';
  showMap = false;
  showFoodAndDrinks = false;
  showMotto = false;

  toggleMap() {
   this.showMap = !this.showMap;
 }

  toggleMotto() {
  this.showMotto = !this.showMotto
  }

  toggleMFoodAndDrinks() {
    this.showFoodAndDrinks = !this.showFoodAndDrinks;
  }
}
