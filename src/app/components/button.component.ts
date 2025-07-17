import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Komponen tombol reusable untuk aplikasi
 * @example
 * <app-button label="Simpan" (click)="onSave()"></app-button>
 */
@Component({
  selector: 'app-button',
  template: `
    <button [type]="type" [disabled]="disabled" (click)="onClick.emit($event)" class="btn">
      <ng-content></ng-content>
      {{ label }}
    </button>
  `,
  styles: [`
    .btn {
      padding: 0.5rem 1.5rem;
      border-radius: 4px;
      background: #1976d2;
      color: white;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn:disabled {
      background: #bdbdbd;
      cursor: not-allowed;
    }
  `]
})
export class ButtonComponent {
  /** Label tombol */
  @Input() label: string = '';
  /** Tipe tombol (button, submit, dsb) */
  @Input() type: 'button' | 'submit' = 'button';
  /** Disabled state */
  @Input() disabled: boolean = false;
  /** Event klik tombol */
  @Output() onClick = new EventEmitter<Event>();
}
