import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  logout(): any {
    localStorage.removeItem('token');
  }
}
