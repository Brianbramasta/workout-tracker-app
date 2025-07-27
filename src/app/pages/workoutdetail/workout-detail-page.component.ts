import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button.component';
import { CardComponent } from '../../components/card.component';

@Component({
  selector: 'app-workout-detail-page',
  standalone: true,
  imports: [ButtonComponent, CardComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './workout-detail-page.component.html',
  styleUrls: ['./workout-detail-page.component.css']
})
export class WorkoutDetailPageComponent {
  // Data dummy untuk detail latihan
  workout = {
    id: 1,
    name: 'Push Day - Upper Body',
    type: 'Strength',
    date: '2024-01-15',
    duration: '75 menit',
    notes: 'Latihan yang sangat intens! Fokus pada chest dan triceps. Berat beban meningkat dari sesi sebelumnya.',
    exercises: [
      { name: 'Bench Press', sets: 4, reps: '8-10', weight: '80kg', notes: 'Fokus pada form yang baik' },
      { name: 'Shoulder Press', sets: 3, reps: '10-12', weight: '50kg', notes: 'Kontrol gerakan' },
      { name: 'Incline Dumbbell Press', sets: 3, reps: '12-15', weight: '30kg', notes: 'Burnout set' },
      { name: 'Tricep Dips', sets: 3, reps: '15-20', weight: 'Bodyweight', notes: 'Sampai failure' },
      { name: 'Lateral Raises', sets: 3, reps: '15-20', weight: '12kg', notes: 'Light weight, high reps' }
    ]
  };

  onEdit() {
    window.location.href = `/workouts/${this.workout.id}/edit`;
  }

  onDelete() {
    if (confirm('Apakah kamu yakin ingin menghapus latihan ini?')) {
      alert('Latihan berhasil dihapus!');
      window.location.href = '/workouts';
    }
  }

  getTotalSets(): number {
    return this.workout.exercises.reduce((sum, ex) => sum + ex.sets, 0);
  }
}
