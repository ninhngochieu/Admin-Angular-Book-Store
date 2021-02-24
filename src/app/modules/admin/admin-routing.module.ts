import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {CategoriesComponent} from '../categories/categories.component';
import {AuthGuard} from '../../auth/auth.guard';

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard]},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
