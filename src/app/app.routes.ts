import { Routes } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { TechnicianDashboardComponent } from './technician/technician-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat', component: ChatbotComponent },
  { path: 'dashboard', component: TechnicianDashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }


];
