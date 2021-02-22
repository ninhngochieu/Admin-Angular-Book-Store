import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PreloaderComponent } from '../../components/preloader/preloader.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ControlSidebarComponent } from '../../components/control-sidebar/control-sidebar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import {FormsModule} from '@angular/forms';
import {IconsModule, TableModule} from 'ng-uikit-pro-standard';
import {ContentHeaderComponent} from '../../components/content-header/content-header.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PreloaderComponent,
    NavbarComponent,
    SidebarComponent,
    ControlSidebarComponent,
    FooterComponent,
    ContentHeaderComponent],
  exports: [
    PreloaderComponent,
    NavbarComponent,
    SidebarComponent,
    ControlSidebarComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    TableModule,
    IconsModule
  ]
})
export class AdminModule { }
