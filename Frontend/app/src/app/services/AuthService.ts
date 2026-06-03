import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/api/users';

  constructor(
    private http: HttpClient
  ) {}

  login(data: any) {
    return this.http.post(
      `${this.apiUrl}/login/`,
      data
    );
  }

  register(data: any) {
    return this.http.post(
      `${this.apiUrl}/register/`,
      data
    );
  }

  saveUser(user: any) {
    localStorage.setItem(
      'user',
      JSON.stringify(user)
    );
  }

  getUser() {
    return JSON.parse(
      localStorage.getItem('user') || '{}'
    );
  }

  getRole() {
    return this.getUser().rol;
  }

  isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user');
  }

}