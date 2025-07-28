import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button.component';
import { AlertComponent } from '../../components/alert.component';
import { WorkoutService, Exercise, Workout } from '../../services/workout.service';

@Component({
  selector: 'app-workout-form-page',
  standalone: true,
  imports: [ButtonComponent, AlertComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './workout-form-page.component.html',
  styleUrls: ['./workout-form-page.component.css']
})
export class WorkoutFormPageComponent implements OnInit {
  // Flag to track if we're editing an existing workout
  isEditing = false;
  workoutId = '';
  pageTitle = 'Tambah Latihan Baru';

  workout = {
    name: '',
    type: 'Strength',
    date: new Date().toISOString().split('T')[0],
    duration: '',
    notes: '',
    exercises: [] as Exercise[]
  };

  showAlert = false;
  alertMessage = '';
  alertType: 'success' | 'error' = 'success';

  // New exercise form
  newExercise: Exercise = {
    id: '',
    name: '',
    sets: 3,
    reps: 10,
    weight: 0,
    notes: ''
  };

  // Flag to show/hide the exercise form
  showExerciseForm = false;
  // Flag to track if we're editing an existing exercise
  isEditingExercise = false;
  // Index of the exercise being edited
  editingExerciseIndex = -1;

  constructor(
    private workoutService: WorkoutService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Check if we're editing an existing workout
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.workoutId = id;
        this.isEditing = true;
        this.pageTitle = 'Edit Latihan';
        this.loadWorkout(id);
      }
    });
  }

  // Load workout data when editing
  loadWorkout(id: string) {
    const workout = this.workoutService.getWorkoutById(id);
    if (workout) {
      this.workout = {
        name: workout.name,
        type: workout.type,
        date: workout.date,
        duration: workout.duration,
        notes: workout.notes || '',
        exercises: [...workout.exercises]
      };
    } else {
      this.showAlert = true;
      this.alertMessage = 'Latihan tidak ditemukan!';
      this.alertType = 'error';
      setTimeout(() => {
        this.router.navigate(['/workouts']);
      }, 2000);
    }
  }

  onSave() {
    if (!this.workout.name || !this.workout.duration) {
      this.showAlert = true;
      this.alertMessage = 'Nama dan durasi latihan harus diisi!';
      this.alertType = 'error';
      return;
    }

    if (this.isEditing) {
      // Update existing workout
      this.workoutService.updateWorkout(this.workoutId, {
        name: this.workout.name,
        type: this.workout.type,
        date: this.workout.date,
        duration: this.workout.duration,
        notes: this.workout.notes,
        exercises: this.workout.exercises
      });
      this.alertMessage = 'Latihan berhasil diperbarui!';
    } else {
      // Save new workout to service
      this.workoutService.addWorkout({
        name: this.workout.name,
        type: this.workout.type,
        date: this.workout.date,
        duration: this.workout.duration,
        notes: this.workout.notes,
        exercises: this.workout.exercises
      });
      this.alertMessage = 'Latihan berhasil disimpan!';
    }

    this.showAlert = true;
    this.alertType = 'success';

    // Redirect ke list setelah 2 detik
    setTimeout(() => {
      this.router.navigate(['/workouts']);
    }, 2000);
  }

  onCancel() {
    this.router.navigate(['/workouts']);
  }

  // Add a new exercise to the workout
  addExercise() {
    if (!this.newExercise.name) {
      this.showAlert = true;
      this.alertMessage = 'Nama latihan harus diisi!';
      this.alertType = 'error';
      return;
    }

    const exerciseToAdd: Exercise = {
      ...this.newExercise,
      id: Date.now().toString(36) + Math.random().toString(36).substring(2)
    };

    if (this.isEditingExercise && this.editingExerciseIndex >= 0) {
      // Update existing exercise
      this.workout.exercises[this.editingExerciseIndex] = exerciseToAdd;
    } else {
      // Add new exercise
      this.workout.exercises.push(exerciseToAdd);
    }

    // Reset form
    this.resetExerciseForm();
  }

  // Edit an existing exercise
  editExercise(index: number) {
    this.isEditingExercise = true;
    this.editingExerciseIndex = index;
    this.newExercise = { ...this.workout.exercises[index] };
    this.showExerciseForm = true;
  }

  // Delete an exercise
  deleteExercise(index: number) {
    this.workout.exercises.splice(index, 1);
  }

  // Reset the exercise form
  resetExerciseForm() {
    this.newExercise = {
      id: '',
      name: '',
      sets: 3,
      reps: 10,
      weight: 0,
      notes: ''
    };
    this.showExerciseForm = false;
    this.isEditingExercise = false;
    this.editingExerciseIndex = -1;
  }
}
