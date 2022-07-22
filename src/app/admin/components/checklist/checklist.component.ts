import { Component, OnInit } from '@angular/core';
import {SignUpService} from "../../../services/sign-up.service";
import {UserData} from "../../../models/user-data.model";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  dataSourceUnpaid: any;
  dataSourcePaid: any;
  displayedColumns = ['firstName', 'lastName', 'check'];
  displayedColumns2 = ['firstName', 'lastName', 'checker'];

  checker: string;

  constructor(private signUpService: SignUpService) {}

  ngOnInit() {
    document.body.style.overflowY = "scroll";
    this.signUpService.getUsers().subscribe(data => {
      const sorted = data.sort((a, b) => a.firstName.localeCompare(b.firstName));
      const withCheckMark = sorted.map(item => ({ addCheckmark: false, removeCheckmark: false, ...item }))
      this.dataSourcePaid = withCheckMark.filter(element => element.check);
      this.dataSourceUnpaid = withCheckMark.filter(element => !element.check);
    })
  }

  getCheckingUsers(): UserData[] {
    return this.dataSourceUnpaid?.filter((user: { addCheckmark: any; }) => user.addCheckmark)
  }

  getUncheckingUsers(): UserData[] {
    return this.dataSourcePaid?.filter((user: { removeCheckmark: any; }) => user.removeCheckmark)
  }

  newCheck(type: string) {
    if (type === 'check') {
      this.dataSourcePaid.map((item: any) => (item.removeCheckmark = false))
    } else {
      this.dataSourceUnpaid.map((item: any) => ( item.addCheckmark = false))
    }
  }

  check(): void {
    if (this.getCheckingUsers()) {
      this.getCheckingUsers().forEach(user => {
        this.signUpService
          .check({...user, check: 'Nadia'})
          .catch((err) => {
            console.log(err);
          });
      })
    }
  }

  uncheck(): void {
    if (this.getUncheckingUsers()) {
      this.getUncheckingUsers().forEach(user => {
        this.signUpService
          .check({...user, check: ''})
          .catch((err) => {
            console.log(err);
          });
      })
    }
  }

  getIncome() {
    return (this.dataSourcePaid ? this.dataSourcePaid.length : 0) * 25;
  }

}
