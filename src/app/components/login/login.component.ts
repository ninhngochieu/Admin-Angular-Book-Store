import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {slideOut, ToastService} from 'ng-uikit-pro-standard';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(@Inject(DOCUMENT) private document: Document,
              private loginService: LoginService,
              private router: Router,
              private authService: AuthService
              ) { }

  ngOnInit(): void {
    this.document.body.classList.add('login-page');
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    if (this.authService.isLogin()){
      this.router.navigateByUrl('/dashboard');
    }

  }

  loginSubmit(): void {
    console.warn(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/dashboard');
      },
      err => {
      console.warn('Tài khoản không hợp lê');
      }
     );
  }
}
