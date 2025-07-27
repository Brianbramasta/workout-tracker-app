import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button.component';
import { CardComponent } from '../../components/card.component';

@Component({
  selector: 'app-goals-page',
  standalone: true,
  imports: [ButtonComponent, CardComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './goals-page.component.html',
  styleUrls: ['./goals-page.component.css']
})
export class GoalsPageComponent {
  // Data dummy untuk goals
  goals = [
    {
      id: 1,
      name: 'Squat 100kg',
      type: 'Strength',
      target: 100,
      current: 80,
      unit: 'kg',
      deadline: '2024-03-15',
      status: 'in-progress'
    },
    {
      id: 2,
      name: 'Lari 5km',
      type: 'Cardio',
      target: 5,
      current: 3.5,
      unit: 'km',
      deadline: '2024-02-28',
      status: 'in-progress'
    },
    {
      id: 3,
      name: 'Push-up 50x',
      type: 'Strength',
      target: 50,
      current: 50,
      unit: 'reps',
      deadline: '2024-01-20',
      status: 'completed'
    },
    {
      id: 4,
      name: 'Berat Badan 70kg',
      type: 'Weight',
      target: 70,
      current: 75,
      unit: 'kg',
      deadline: '2024-04-01',
      status: 'in-progress'
    }
  ];

  onCreateGoal() {
    alert('Fitur buat goal akan segera hadir!');
  }

  getProgressPercentage(goal: any): number {
    return Math.min((goal.current / goal.target) * 100, 100);
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'overdue': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  }
}
