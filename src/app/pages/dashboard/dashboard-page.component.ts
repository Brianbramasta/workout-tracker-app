import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/button.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  // Logic dashboard di sini
  onAddWorkout() {
    // Navigasi ke halaman tambah latihan
    window.location.href = '/workouts/new';
  }
}
