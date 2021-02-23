import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './modules/admin/admin.component';
import {AdminModule} from './modules/admin/admin.module';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: AdminComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
