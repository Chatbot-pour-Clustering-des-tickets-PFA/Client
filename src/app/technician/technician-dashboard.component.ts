import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Ticket {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  type: string;
  status: 'open' | 'in-progress' | 'resolved';
  createdAt: Date;
}

@Component({
  selector: 'app-technician-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technician-dashboard.component.html',
  styleUrls: ['./technician-dashboard.component.css']
})
export class TechnicianDashboardComponent {
  tickets: Ticket[] = [
    {
      id: 1,
      title: 'Server Connection Issue',
      description: 'Unable to connect to the main database server',
      priority: 'high',
      type: 'Infrastructure',
      status: 'open',
      createdAt: new Date()
    },
    {
      id: 2,
      title: 'Login Page Error',
      description: 'Users reporting 404 error on login page',
      priority: 'medium',
      type: 'Frontend',
      status: 'in-progress',
      createdAt: new Date()
    },
    {
      id: 3,
      title: 'Report Generation Slow',
      description: 'Monthly reports taking longer than usual to generate',
      priority: 'low',
      type: 'Performance',
      status: 'open',
      createdAt: new Date()
    }
  ];

  filterByPriority(event: any) {
    // Implement filtering logic
  }

  filterByStatus(event: any) {
    // Implement filtering logic
  }
}
