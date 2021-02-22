import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './modules/admin/admin.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {AdminModule} from './modules/admin/admin.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AdminModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
