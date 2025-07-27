import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button.component';
import { CardComponent } from '../../components/card.component';

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

  // Properties for search and filter
  searchText = '';
  selectedType = 'all';
  filteredTemplates = [...this.templates];

  // Available workout types for filter
  workoutTypes = [
    { value: 'all', label: 'Semua Tipe' },
    { value: 'Strength', label: 'Strength' },
    { value: 'Cardio', label: 'Cardio' }
  ];

  // Days of the week for filter
  days = [
    { value: 'all', label: 'Semua Hari' },
    { value: 'Senin', label: 'Senin' },
    { value: 'Selasa', label: 'Selasa' },
    { value: 'Rabu', label: 'Rabu' },
    { value: 'Kamis', label: 'Kamis' },
    { value: 'Jumat', label: 'Jumat' },
    { value: 'Sabtu', label: 'Sabtu' },
    { value: 'Minggu', label: 'Minggu' }
  ];
  selectedDay = 'all';

  ngOnInit() {
    this.applyFilters();
  }

  // Method to handle search and filter
  applyFilters() {
    this.filteredTemplates = this.templates.filter(template => {
      // Filter by search text
      const matchesSearch = this.searchText === '' ||
        template.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        template.exercises.some(ex => ex.toLowerCase().includes(this.searchText.toLowerCase()));

      // Filter by type
      const matchesType = this.selectedType === 'all' || template.type === this.selectedType;

      // Filter by day
      const matchesDay = this.selectedDay === 'all' || template.day === this.selectedDay;

      return matchesSearch && matchesType && matchesDay;
    });
  }

  // Method to handle search input changes
  onSearchChange() {
    this.applyFilters();
  }

  // Method to handle type filter changes
  onTypeChange() {
    this.applyFilters();
  }

  // Method to handle day filter changes
  onDayChange() {
    this.applyFilters();
  }

  onCreateTemplate() {
    alert('Fitur buat template akan segera hadir!');
  }
}
