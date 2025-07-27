import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button.component';
import { CardComponent } from '../../components/card.component';

@Component({
  selector: 'app-workout-list-page',
  standalone: true,
  imports: [ButtonComponent, CardComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './workout-list-page.component.html',
  styleUrls: ['./workout-list-page.component.css']
})
export class WorkoutListPageComponent {
  // Data dummy untuk contoh
  workouts = [
    { id: 1, name: 'Push Day', date: '2024-01-15', duration: '45 min', type: 'Strength' },
    { id: 2, name: 'Cardio Run', date: '2024-01-14', duration: '30 min', type: 'Cardio' },
    { id: 3, name: 'Pull Day', date: '2024-01-13', duration: '50 min', type: 'Strength' }
  ];

  onAddWorkout() {
    window.location.href = '/workouts/new';
  }
}
