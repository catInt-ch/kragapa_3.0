import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', Validators.required),
    foodType: new FormControl('', Validators.required),
    meal: new FormControl(''),
    favoriteDrink: new FormControl('', Validators.required),
    invitedBy: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmitForm(): void {
    console.dir(this.signUpForm);
  }
}
