import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  // protected url = 'https://localhost:5001/api/';
  protected url = 'api/';
  // private tokenHeader: HttpHeaders;

  constructor(protected httpClient: HttpClient) {
    // this.tokenHeader = new HttpHeaders({
    //   Authorization: 'Bearer ' + localStorage.getItem('token'),
    // });
  }

  add(object: any): Observable<any>{
    return this.httpClient.post(this.url, object/*, {headers: this.tokenHeader}*/);
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete(`${this.url}/${id}`/*, {headers: this.tokenHeader}*/);
  }

  getAll(): Observable<any>{
    return this.httpClient.get(this.url/*, {headers: this.tokenHeader}*/ );
  }

  get(id: number): Observable<any>{
    return this.httpClient.get(`${this.url}/${id}`/*, {headers: this.tokenHeader}*/);
  }

  update(id: number, object: any): Observable<any>{
    return this.httpClient.put(`${this.url}/${id}`, object/*, {headers: this.tokenHeader}*/);
  }
}
