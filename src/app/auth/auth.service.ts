import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLogin(): any {
    return localStorage.getItem('token') != null;
  }

  setToken(token): any {
    localStorage.setItem('token', token);
  }

  hasToken(): any {
    return localStorage.getItem('token') != null;
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
