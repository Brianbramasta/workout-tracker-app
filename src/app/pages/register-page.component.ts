import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../components/button.component';
import { AlertComponent } from '../components/alert.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ButtonComponent, AlertComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  showAlert = false;
  alertMessage = '';
  alertType: 'success' | 'error' = 'error';

  onRegister() {
    if (!this.registerData.name || !this.registerData.email || !this.registerData.password) {
      this.showAlert = true;
      this.alertMessage = 'Semua field harus diisi!';
      this.alertType = 'error';
      return;
    }

    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.showAlert = true;
      this.alertMessage = 'Password dan konfirmasi password tidak cocok!';
      this.alertType = 'error';
      return;
    }

    if (this.registerData.password.length < 6) {
      this.showAlert = true;
      this.alertMessage = 'Password minimal 6 karakter!';
      this.alertType = 'error';
      return;
    }

    // Simulasi register
    this.showAlert = true;
    this.alertMessage = 'Registrasi berhasil! Redirecting...';
    this.alertType = 'success';

    // Redirect ke login setelah 2 detik
    setTimeout(() => {
      window.location.href = '/login';
    }, 2000);
  }
}
