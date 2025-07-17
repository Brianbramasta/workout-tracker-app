import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Komponen alert untuk menampilkan pesan penting
 * @example
 * <app-alert type="success" message="Berhasil!" />
 */
@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="alert" [ngClass]="type">
      {{ message }}
    </div>
  `,
  styles: [`
    .alert {
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 1rem;
      font-weight: 500;
    }
    .success { background: #e8f5e9; color: #388e3c; }
    .error { background: #ffebee; color: #d32f2f; }
    .info { background: #e3f2fd; color: #1976d2; }
    .warning { background: #fffde7; color: #fbc02d; }
  `]
})
export class AlertComponent {
  /** Jenis alert: success, error, info, warning */
  @Input() type: 'success' | 'error' | 'info' | 'warning' = 'info';
  /** Pesan yang ditampilkan */
  @Input() message: string = '';
}
