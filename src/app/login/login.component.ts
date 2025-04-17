import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';       // <-- For ngForm, ngModel
import { CommonModule } from '@angular/common';    

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // optional, or you can use inline styles
})
export class LoginComponent {
  ensias = 'assets/logo.jpg';

  handleLogin() {
    // Your login logic goes here
    console.log("Login submitted");
  }
}
