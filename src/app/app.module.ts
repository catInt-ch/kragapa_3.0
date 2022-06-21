import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MottoComponent } from './components/motto/motto.component';
import { FoodAndDrinksComponent } from './components/food-and-drinks/food-and-drinks.component';
import { SignComponent } from './components/sign/sign.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ForestComponent } from './components/svg/forest/forest.component';
import { EnvironmentComponent } from './components/svg/environment/environment.component';
import { PeopleComponent } from './components/svg/people/people.component';
import { TentComponent } from './components/svg/tent/tent.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FireworksComponent } from './components/sign-up/fireworks/fireworks.component';

@NgModule({
  declarations: [
    AppComponent,
    MottoComponent,
    FoodAndDrinksComponent,
    SignComponent,
    ForestComponent,
    EnvironmentComponent,
    PeopleComponent,
    TentComponent,
    OverviewComponent,
    SignUpComponent,
    FireworksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
