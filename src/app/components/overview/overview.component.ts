import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {}

  onNavigateForward(): void {
    this.navigationService.navigateForward();
  }
}
