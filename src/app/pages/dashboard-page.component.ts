import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  // Logic dashboard di sini
  onAddWorkout() {
    alert('Navigasi ke halaman tambah latihan!');
  }
}
