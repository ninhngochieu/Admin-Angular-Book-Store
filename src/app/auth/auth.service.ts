import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLogin(): any {
    return localStorage.getItem('token') != null;
  }
}
