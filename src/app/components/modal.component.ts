import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Komponen modal dialog reusable
 * @example
 * <app-modal [visible]="show" (close)="show = false">Konten modal</app-modal>
 */
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" *ngIf="visible" (click)="onClose()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <ng-content></ng-content>
        <button class="close-btn" (click)="onClose()">Tutup</button>
      </div>
    </div>
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    .modal-content {
      background: #fff;
      padding: 2rem;
      border-radius: 8px;
      min-width: 300px;
      position: relative;
    }
    .close-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      background: transparent;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
    }
  `]
})
export class ModalComponent {
  /** Status modal tampil/sembunyi */
  @Input() visible: boolean = false;
  /** Event saat modal ditutup */
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
