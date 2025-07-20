import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../components/button.component';
import { CardComponent } from '../components/card.component';

@Component({
  selector: 'app-plans-page',
  standalone: true,
  imports: [ButtonComponent, CardComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './plans-page.component.html',
  styleUrls: ['./plans-page.component.css']
})
export class PlansPageComponent {
  // Data dummy untuk template plans
  templates = [
    { id: 1, name: 'Push Day A', type: 'Strength', exercises: ['Bench Press', 'Shoulder Press', 'Tricep Dips'], day: 'Senin' },
    { id: 2, name: 'Pull Day B', type: 'Strength', exercises: ['Deadlift', 'Pull-ups', 'Bicep Curls'], day: 'Rabu' },
    { id: 3, name: 'Leg Day C', type: 'Strength', exercises: ['Squats', 'Lunges', 'Calf Raises'], day: 'Jumat' },
    { id: 4, name: 'Cardio Mix', type: 'Cardio', exercises: ['Running', 'Cycling', 'Jump Rope'], day: 'Selasa' }
  ];

  weeklySchedule = [
    { day: 'Senin', plan: 'Push Day A', status: 'completed' },
    { day: 'Selasa', plan: 'Cardio Mix', status: 'completed' },
    { day: 'Rabu', plan: 'Pull Day B', status: 'today' },
    { day: 'Kamis', plan: 'Rest Day', status: 'upcoming' },
    { day: 'Jumat', plan: 'Leg Day C', status: 'upcoming' },
    { day: 'Sabtu', plan: 'Flexibility', status: 'upcoming' },
    { day: 'Minggu', plan: 'Rest Day', status: 'upcoming' }
  ];

  onCreateTemplate() {
    alert('Fitur buat template akan segera hadir!');
  }
}
