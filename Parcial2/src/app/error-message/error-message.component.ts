import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-message',
  template: `<div class="error-message">{{ errorMessage }}</div>`,
  styleUrls: ['./error-message.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ErrorMessageComponent {
  @Input() errorMessage!: string;
}
