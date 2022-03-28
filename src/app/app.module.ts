import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MottoComponent } from './components/motto/motto.component';
import { FoodAndDrinksComponent } from './components/food-and-drinks/food-and-drinks.component';
import { MapComponent } from './components/map/map.component';
import {MatButtonModule} from "@angular/material/button";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ForestComponent } from './components/svg/forest/forest.component';
import { EnvironmentComponent } from './components/svg/environment/environment.component';
import { PeopleComponent } from './components/svg/people/people.component';
import { TentComponent } from './components/svg/tent/tent.component';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    MottoComponent,
    FoodAndDrinksComponent,
    MapComponent,
    HomeComponent,
    ForestComponent,
    EnvironmentComponent,
    PeopleComponent,
    TentComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
