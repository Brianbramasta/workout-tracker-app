import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button.component';
import { AlertComponent } from '../../components/alert.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ButtonComponent, AlertComponent, RouterLink, CommonModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginData = {
    email: '',
    password: ''
  };

  showAlert = false;
  alertMessage = '';
  alertType: 'success' | 'error' = 'error';

  onLogin() {
    if (!this.loginData.email || !this.loginData.password) {
      this.showAlert = true;
      this.alertMessage = 'Email dan password harus diisi!';
      this.alertType = 'error';
      return;
    }

    // Simulasi login
    this.showAlert = true;
    this.alertMessage = 'Login berhasil! Redirecting...';
    this.alertType = 'success';

    // Redirect ke dashboard setelah 2 detik
    setTimeout(() => {
      window.location.href = '/';
    }, 2000);
  }
}
