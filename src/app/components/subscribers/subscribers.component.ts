import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {UserData} from "../../models/user-data.model";
import {SignUpService} from "../../services/sign-up.service";

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SubscribersComponent implements OnInit{
  dataSource: any;
  columnsToDisplay = ['index', 'firstName', 'lastName'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: UserData | null;

  dataSourceDessert: any;
  dataSourceSalad: any;
  displayedColumns = ['meal', 'name'];

  constructor(private signUpService: SignUpService) {}

  getHeader(field: string): string {
    let header = ''
    switch (field) {
      case 'firstName':
        header = 'Vorname';
        break;
      case 'lastName':
        header = 'Nachname';
        break;
      case 'index':
        header = 'Nr.';
        break;
      default:
        header = ''
        break;
    }
    return header;
  }

  ngOnInit() {
    document.body.style.overflowY = "scroll";
    this.signUpService.getUsers().subscribe(data => {
      const sorted = data.sort((a: { created: string; }, b: { created: string; })=> {
        return new Date(a.created).getTime() - new Date(b.created).getTime()
      });
      this.dataSource = sorted.map((item, index) => ({index: index + 1, ...item}));
      const meals = sorted.map((item, index) => ({index: index + 1, name: item.firstName + " " + item.lastName, ...item}));
      this.dataSourceDessert = meals.filter(item => item.foodType === 'Dessert');
      this.dataSourceSalad = meals.filter(item => item.foodType === 'Salat')

    })
  }
}
