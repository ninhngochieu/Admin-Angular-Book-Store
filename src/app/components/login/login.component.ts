import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {slideOut, ToastService} from 'ng-uikit-pro-standard';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

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
              private authService: AuthService,
              private snackBar: MatSnackBar
              ) { }

  ngOnInit(): void {
    this.document.body.classList.add('login-page');
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    if (this.authService.isLogin()){
      this.document.body.classList.remove('login-page');
      this.router.navigateByUrl('/dashboard');
    }

  }

  loginSubmit(): void {
    console.warn(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe(
      res => {
        this.authService.setToken(res.token);
        this.openSnackBar('Chào mừng', 'Close');
        this.router.navigateByUrl('/dashboard');
      },
      err => {
      console.warn('Tài khoản không hợp lê');
      this.openSnackBar('Tài khoản hoặc mật khẩu không hợp lê', 'Close');
      }
     );
  }
  openSnackBar(message: string, action: string): any {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
