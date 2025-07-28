import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button.component';
import { CardComponent } from '../../components/card.component';
import { WorkoutService, Workout } from '../../services/workout.service';

@Component({
  selector: 'app-workout-list-page',
  standalone: true,
  imports: [ButtonComponent, CardComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './workout-list-page.component.html',
  styleUrls: ['./workout-list-page.component.css']
})
export class WorkoutListPageComponent implements OnInit {
  // Workouts from service
  workouts: Workout[] = [];

  // Properties for search and filter
  searchText = '';
  selectedType = 'all';
  selectedDateRange = 'all';
  filteredWorkouts: Workout[] = [];

  constructor(private workoutService: WorkoutService, private router: Router) {}

  // Available workout types for filter
  workoutTypes = [
    { value: 'all', label: 'Semua Jenis' },
    { value: 'Strength', label: 'Strength' },
    { value: 'Cardio', label: 'Cardio' },
    { value: 'Flexibility', label: 'Flexibility' }
  ];

  // Date range options for filter
  dateRanges = [
    { value: 'all', label: 'Semua Tanggal' },
    { value: 'today', label: 'Hari Ini' },
    { value: 'week', label: 'Minggu Ini' },
    { value: 'month', label: 'Bulan Ini' }
  ];

  ngOnInit() {
    // Subscribe to workouts from service
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
      this.applyFilters();
    });
  }

  // Method to handle search and filter
  applyFilters() {
    this.filteredWorkouts = this.workouts.filter(workout => {
      // Filter by search text
      const matchesSearch = this.searchText === '' ||
        workout.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        workout.type.toLowerCase().includes(this.searchText.toLowerCase());

      // Filter by type
      const matchesType = this.selectedType === 'all' || workout.type === this.selectedType;

      // Filter by date range
      let matchesDate = true;
      if (this.selectedDateRange !== 'all') {
        const workoutDate = new Date(workout.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (this.selectedDateRange === 'today') {
          matchesDate = workoutDate.getTime() === today.getTime();
        } else if (this.selectedDateRange === 'week') {
          // Get start of week (Sunday)
          const startOfWeek = new Date(today);
          startOfWeek.setDate(today.getDate() - today.getDay());

          // Get end of week (Saturday)
          const endOfWeek = new Date(startOfWeek);
          endOfWeek.setDate(startOfWeek.getDate() + 6);

          matchesDate = workoutDate >= startOfWeek && workoutDate <= endOfWeek;
        } else if (this.selectedDateRange === 'month') {
          matchesDate = workoutDate.getMonth() === today.getMonth() &&
                       workoutDate.getFullYear() === today.getFullYear();
        }
      }

      return matchesSearch && matchesType && matchesDate;
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

  // Method to handle date range filter changes
  onDateRangeChange() {
    this.applyFilters();
  }

  // Navigate to add workout page
  onAddWorkout() {
    this.router.navigate(['/workouts/new']);
  }

  // Delete a workout
  deleteWorkout(id: string) {
    if (confirm('Apakah Anda yakin ingin menghapus latihan ini?')) {
      this.workoutService.deleteWorkout(id);
    }
  }


}
