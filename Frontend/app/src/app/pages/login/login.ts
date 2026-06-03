import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink,],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {

  if (this.loginForm.invalid) {
    return;
  }

  this.authService.login(
    this.loginForm.value
  ).subscribe({

    next: (response: any) => {

      console.log('Usuario logueado', response);

      this.authService.saveUser(response);

      if (response.rol === 'admin') {
        this.router.navigate(['/dashboard-admin']);
      }
      else {
        this.router.navigate(['/dashboard-usuario']);
      }

    },

    error: (error) => {
      console.error('Error de login', error);
      alert('Email o contraseña incorrectos');
    }

  });

}
}