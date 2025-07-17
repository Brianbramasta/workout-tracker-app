import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Komponen loader/spinner sederhana
 * @example
 * <app-loader [loading]="isLoading" />
 */
@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="loading" class="loader"></div>
  `,
  styles: [`
    .loader {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #1976d2;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      animation: spin 1s linear infinite;
      margin: 1rem auto;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class LoaderComponent {
  /** Status loading */
  @Input() loading: boolean = false;
}
