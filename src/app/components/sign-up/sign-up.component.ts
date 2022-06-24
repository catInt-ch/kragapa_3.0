import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData } from 'src/app/models/user-data.model';
import { SignUpService } from 'src/app/services/sign-up.service';
import { fadeInOut } from 'src/app/util/fade-in-out.animation';

const forbiddenNames: string[] = ['Marco Inniger', 'Nadia Kramer'];

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations: [fadeInOut],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', Validators.required),
    foodType: new FormControl('', Validators.required),
    meal: new FormControl(''),
    favoriteDrink: new FormControl('', Validators.required),
    invitedBy: new FormControl('', Validators.required),
    otherPerson: new FormControl(''),
  });

  bringsMeal = false;
  isOtherPerson = false;

  isSignupCompleted = false;

  get name(): string {
    const firstName = this.signUpForm.controls['firstName'].value;
    const lastName = this.signUpForm.controls['lastName'].value;
    return `${firstName} ${lastName}`;
  }

  get isNameValid(): string {
    const isValid = !forbiddenNames.includes(this.name);
    if (!isValid) {
      this.signUpForm.controls['lastName'].setErrors({ invalid: true });
      return `${this.name} ist kein gültiger Name`;
    }
    return '';
  }

  constructor(private signUpService: SignUpService) {}

  ngOnInit(): void {
    document.body.style.overflowY = "scroll";
  }

  onSubmitForm(): void {
    if (this.signUpForm.valid) {
      const userData = this.signUpForm.value as UserData;
      this.signUpService
        .signUp(userData)
        .then((res) => {
          console.log(res);
          this.isSignupCompleted = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  onSelectMealType(value: string): void {
    const mealControl = this.signUpForm.controls['meal'];
    if (value !== 'Nichts') {
      this.bringsMeal = true;
      mealControl.addValidators(Validators.required);
      if (this.name === 'Yves Wehrli') {
        mealControl.setValue("Yves' Brot");
      }
    } else {
      this.bringsMeal = false;
      mealControl.removeValidators(Validators.required);
    }
  }

  onSelectPerson(value: string): void {
    if (value === 'Andere') {
      this.isOtherPerson = true;
      this.signUpForm.controls['otherPerson'].addValidators(
        Validators.required
      );
    } else {
      this.isOtherPerson = false;
      this.signUpForm.controls['otherPerson'].removeValidators(
        Validators.required
      );
    }
  }
}
