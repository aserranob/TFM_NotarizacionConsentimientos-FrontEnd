import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post('http://localhost:8002/', {
      emailWord: username,
      passwordWord: password,
    });
  }

  loginget2(username: string, password: string) {
    return this.http.get('http://localhost:8002/', {
    });
  }

  loginget(username: string, password: string) {
    return this.http.get('http://localhost:8002/');
  }

}
