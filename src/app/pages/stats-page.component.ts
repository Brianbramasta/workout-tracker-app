import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../components/button.component';
import { ChartComponent } from '../components/chart.component';

@Component({
  selector: 'app-stats-page',
  standalone: true,
  imports: [ButtonComponent, ChartComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.css']
})
export class StatsPageComponent {
  // Data dummy untuk statistik
  stats = {
    totalWorkouts: 45,
    totalHours: 67.5,
    currentStreak: 12,
    longestStreak: 21,
    averageWorkoutDuration: 90,
    favoriteWorkout: 'Push Day'
  };

  weeklyData = [
    { day: 'Sen', workouts: 2, duration: 120 },
    { day: 'Sel', workouts: 1, duration: 60 },
    { day: 'Rab', workouts: 2, duration: 150 },
    { day: 'Kam', workouts: 0, duration: 0 },
    { day: 'Jum', workouts: 1, duration: 90 },
    { day: 'Sab', workouts: 2, duration: 180 },
    { day: 'Min', workouts: 1, duration: 45 }
  ];

  workoutTypes = [
    { type: 'Strength', count: 25, percentage: 55 },
    { type: 'Cardio', count: 12, percentage: 27 },
    { type: 'Flexibility', count: 5, percentage: 11 },
    { type: 'Sports', count: 3, percentage: 7 }
  ];

  onExportData() {
    alert('Fitur export data akan segera hadir!');
  }
}
