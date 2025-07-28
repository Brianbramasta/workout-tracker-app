import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
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
  constructor(private router: Router) {}

  onAddWorkout() {
    // Navigasi ke halaman tambah latihan menggunakan Angular Router
    this.router.navigate(['/workouts/new']);
  }
}
