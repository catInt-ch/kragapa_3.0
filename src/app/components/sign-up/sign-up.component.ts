import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData } from 'src/app/models/user-data.model';
import { SignUpService } from 'src/app/services/sign-up.service';

const forbiddenNames: string[] = ['Marco Inniger', 'Nadia Kramer'];

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

  get isNameValid(): string {
    const firstName = this.signUpForm.controls['firstName'].value;
    const lastName = this.signUpForm.controls['lastName'].value;
    const isValid = !forbiddenNames.includes(`${firstName} ${lastName}`);
    if (!isValid) {
      this.signUpForm.controls['lastName'].setErrors({ invalid: true });
      return `${firstName} ${lastName} ist kein gültiger Name`;
    }
    return '';
  }

  constructor(private signUpService: SignUpService) {}

  ngOnInit(): void {}

  onSubmitForm(): void {
    if (this.signUpForm.valid) {
      const userData = this.signUpForm.value as UserData;
      this.signUpService
        .signUp(userData)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}
