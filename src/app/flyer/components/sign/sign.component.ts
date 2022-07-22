import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { fadeInOut } from 'src/app/util/fade-in-out.animation';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
  animations: [fadeInOut],
})
export class SignComponent implements OnInit {
  isDisplayed: boolean = false;
  isTextDisplayed: boolean = false;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    setTimeout(() => (this.isDisplayed = true), 2000);
    setTimeout(() => (this.isTextDisplayed = true), 2500);
  }

  onNavigateForward(): void {
    this.navigationService.navigateForward();
  }
}
