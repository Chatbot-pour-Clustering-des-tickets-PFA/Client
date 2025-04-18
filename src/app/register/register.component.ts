import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { User } from '../models/user';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  imports: [ FormsModule, CommonModule, HttpClientModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private http: HttpClient) {}
  user: User = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    role: ''
  };
  handleSignup() {
    console.log(this.user);
    this.http.post('http://localhost:8080/register/user', this.user)
      .subscribe({
        next: (res) => {
          console.log('Registration successful!', res);
          // Navigate or show success message
        },
        error: (err) => {
          console.error('Error occurred:', err);
          // Show error message
        }
      });
  }
}


