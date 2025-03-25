import { Routes } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { TechnicianDashboardComponent } from './technician/technician-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  { path: 'chat', component: ChatbotComponent },
  { path: 'dashboard', component: TechnicianDashboardComponent }
];
