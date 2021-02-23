import { Injectable } from '@angular/core';
import {BaseService} from '../../core/base.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService{

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url += 'login';
  }

  login(info): any {
    return this.httpClient.post(this.url, info);
  }
}
