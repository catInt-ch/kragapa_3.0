import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FoodAndDrinksComponent } from './components/food-and-drinks/food-and-drinks.component';
import { MapComponent } from './components/map/map.component';
import { MottoComponent } from './components/motto/motto.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
  },
  {
    path: 'motto',
    component: MottoComponent,
  },
  {
    path: 'foods-drinks',
    component: FoodAndDrinksComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: '*/*',
    redirectTo: '',
    pathMatch: 'full',
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
