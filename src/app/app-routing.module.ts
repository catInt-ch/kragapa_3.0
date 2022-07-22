import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodAndDrinksComponent } from './components/food-and-drinks/food-and-drinks.component';
import { SignComponent } from './components/sign/sign.component';
import { MottoComponent } from './components/motto/motto.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {SubscribersComponent} from "./components/subscribers/subscribers.component";
import {ChecklistComponent} from "./components/checklist/checklist.component";

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
    path: 'sign',
    component: SignComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'staff-only',
    component: SubscribersComponent,
  },
  {
    path: 'checklist',
    component: ChecklistComponent,
  },

  {
    path: '*/*',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
