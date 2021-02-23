import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {slideOut} from 'ng-uikit-pro-standard';
import {LoginService} from './login.service';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(@Inject(DOCUMENT) private document: Document, private loginService: LoginService) { }

  ngOnInit(): void {
    this.document.body.classList.add('login-page');
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  loginSubmit(): void {
    console.warn(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe(rs => {
      console.warn('Result', rs);
    });
  }
}
