import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Login form model
  credentials = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  handleLogin() {
    console.log(this.credentials);

    this.http.post('http://localhost:8080/authenticate', this.credentials, { responseType: 'text' })
      .subscribe({
        next: (token) => {
          console.log('JWT received:', token);
          localStorage.setItem('jwt', token);  // save token for future use
          // Optionally navigate to a protected route here
        },
        error: (err) => {
          console.error('Login failed:', err);
        }
      });
  }
}
