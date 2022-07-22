import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { fadeInOut } from 'src/app/util/fade-in-out.animation';

@Component({
  selector: 'app-motto',
  templateUrl: './motto.component.html',
  styleUrls: ['./motto.component.scss'],
  animations: [fadeInOut],
})
export class MottoComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {}

  onNavigateForward(): void {
    this.navigationService.navigateForward();
  }
}
