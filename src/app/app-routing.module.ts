import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodAndDrinksComponent } from './flyer/components/food-and-drinks/food-and-drinks.component';
import { SignComponent } from './flyer/components/sign/sign.component';
import { MottoComponent } from './flyer/components/motto/motto.component';
import { OverviewComponent } from './flyer/components/overview/overview.component';
import { SignUpComponent } from './flyer/components/sign-up/sign-up.component';
import {SubscribersComponent} from "./admin/components/subscribers/subscribers.component";
import {ChecklistComponent} from "./admin/components/checklist/checklist.component";
import {UserSelectorComponent} from "./admin/components/user-selector/user-selector.component";

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
    component: UserSelectorComponent,
    children: [
      {
        path: 'nadia',
        component: ChecklistComponent,
        data: { user: 'nadia' }
      },
      {
        path: 'natha',
        component: ChecklistComponent,
        data: { user: 'natha' }
      },
      {
        path: 'karin',
        component: ChecklistComponent,
        data: { user: 'karin' }
      },
      {
        path: 'sheila',
        component: ChecklistComponent,
        data: { user: 'sheila' }
      },
    ]
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
