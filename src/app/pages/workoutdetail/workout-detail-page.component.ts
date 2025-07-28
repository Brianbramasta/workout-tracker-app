import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button.component';
import { CardComponent } from '../../components/card.component';
import { WorkoutService, Workout, Exercise } from '../../services/workout.service';

@Component({
  selector: 'app-workout-detail-page',
  standalone: true,
  imports: [ButtonComponent, CardComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './workout-detail-page.component.html',
  styleUrls: ['./workout-detail-page.component.css']
})
export class WorkoutDetailPageComponent implements OnInit {
  workout: Workout | null = null;
  workoutId = '';
  notFound = false;

  constructor(
    private workoutService: WorkoutService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get workout ID from route parameters
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.workoutId = id;
        this.loadWorkout(id);
      } else {
        this.notFound = true;
      }
    });
  }

  // Load workout data
  loadWorkout(id: string) {
    const workout = this.workoutService.getWorkoutById(id);
    if (workout) {
      this.workout = workout;
    } else {
      this.notFound = true;
    }
  }

  onEdit() {
    this.router.navigate(['/workouts', this.workoutId, 'edit']);
  }

  onDelete() {
    if (confirm('Apakah kamu yakin ingin menghapus latihan ini?')) {
      if (this.workoutService.deleteWorkout(this.workoutId)) {
        alert('Latihan berhasil dihapus!');
        this.router.navigate(['/workouts']);
      }
    }
  }

  getTotalSets(): number {
    if (!this.workout) return 0;
    return this.workout.exercises.reduce((sum, ex) => sum + ex.sets, 0);
  }
}
