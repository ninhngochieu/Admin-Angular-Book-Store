import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  // protected url = 'https://localhost:5001/api/';
  protected url = 'api/';

  constructor(protected httpClient: HttpClient) { }

  add(object: any): Observable<any>{
    return this.httpClient.post(this.url, object);
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  getAll(): Observable<any>{
    return this.httpClient.get(this.url);
  }

  get(id: number): Observable<any>{
    return this.httpClient.get(`${this.url}/${id}`);
  }

  update(id: number, object: any): Observable<any>{
    return this.httpClient.put(`${this.url}/${id}`, object);
  }
}
