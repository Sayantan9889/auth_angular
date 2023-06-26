import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../CLASS/auth';

@Injectable({
  providedIn: 'root'
})
export class HttpSreviceService {

  login_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signin";

  constructor(private http:HttpClient) {}

  login(data:any):Observable<Auth[]> {
    return this.http.post<Auth[]>(this.login_api,data);
  }
}
