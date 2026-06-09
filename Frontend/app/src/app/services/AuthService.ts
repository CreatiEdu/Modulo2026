import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Base API URL for authentication endpoints
  private authBaseUrl = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient
  ) {}

  login(data: any) {
    // Use the base API URL to send login credentials and receive a JWT token
    return this.http.post(
      `${this.authBaseUrl}/login/`,
      data
    );
  }

  register(data: any) {
    // Register a new user through the backend
    return this.http.post(
      `${this.authBaseUrl}/register/`,
      data
    );
  }

  /** Retrieve the stored JWT token */
  getToken(): string | null {
    const user = this.getUser();
    return user && user.token ? user.token : null;
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
    const rolBackend = this.getUser().rol;
    if (rolBackend === 1 || rolBackend === '1') {
      return 'cliente';
    }
    if (rolBackend === 2 || rolBackend === '2') {
      return 'gestor'; 
    }
    if (rolBackend === 3 || rolBackend === '3') {
      return 'admin';
    }
    return '';
  }

  isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user');
  }

}