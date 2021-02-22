import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {CategoriesComponent} from '../categories/categories.component';

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'categories', component: CategoriesComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
