import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../components/button.component';
import { AlertComponent } from '../components/alert.component';

@Component({
  selector: 'app-workout-form-page',
  standalone: true,
  imports: [ButtonComponent, AlertComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './workout-form-page.component.html',
  styleUrls: ['./workout-form-page.component.css']
})
export class WorkoutFormPageComponent {
  workout = {
    name: '',
    type: 'Strength',
    date: new Date().toISOString().split('T')[0],
    duration: '',
    notes: ''
  };

  showAlert = false;
  alertMessage = '';
  alertType: 'success' | 'error' = 'success';

  onSave() {
    if (!this.workout.name || !this.workout.duration) {
      this.showAlert = true;
      this.alertMessage = 'Nama dan durasi latihan harus diisi!';
      this.alertType = 'error';
      return;
    }

    // Simulasi save
    this.showAlert = true;
    this.alertMessage = 'Latihan berhasil disimpan!';
    this.alertType = 'success';

    // Redirect ke list setelah 2 detik
    setTimeout(() => {
      window.location.href = '/workouts';
    }, 2000);
  }

  onCancel() {
    window.location.href = '/workouts';
  }
}
