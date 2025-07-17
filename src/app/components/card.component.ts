import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Komponen kartu (card) reusable untuk membungkus konten
 * @example
 * <app-card title="Judul">Konten di sini</app-card>
 */
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h3 *ngIf="title">{{ title }}</h3>
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .card {
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.07);
      padding: 1.5rem;
      margin-bottom: 1rem;
    }
    h3 {
      margin-top: 0;
    }
  `]
})
export class CardComponent {
  /** Judul kartu (opsional) */
  @Input() title?: string;
}
