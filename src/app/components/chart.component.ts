import { Component, Input } from '@angular/core';

/**
 * Komponen chart placeholder (bisa diganti dengan chart library)
 * @example
 * <app-chart [title]="'Progress Mingguan'" />
 */
@Component({
  selector: 'app-chart',
  template: `
    <div class="chart-placeholder">
      <strong>{{ title }}</strong>
      <div style="height:120px; background:#e3f2fd; border-radius:8px; margin-top:8px; display:flex; align-items:center; justify-content:center; color:#1976d2;">
        [Chart Placeholder]
      </div>
    </div>
  `
})
export class ChartComponent {
  /** Judul chart */
  @Input() title: string = '';
}
