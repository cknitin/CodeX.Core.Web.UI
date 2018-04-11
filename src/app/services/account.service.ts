import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel, RegisterModel } from '../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }

  login(userLogin: LoginModel): any {
    console.log(userLogin);
    return this.http.post<LoginModel>('http://localhost:52434/api/account/login', userLogin, {

    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    });
  }

  register(register: RegisterModel): any {
    console.log(register);
    return this.http.post<RegisterModel>('http://localhost:52434/api/account/register', register, {

    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    });
  }

}
