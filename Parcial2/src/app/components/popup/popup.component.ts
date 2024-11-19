import { Component, EventEmitter, Input, Output } from '@angular/core';
import { characterInterface } from '../../interfaces/character-interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  @Input() isEditMode: boolean = false;
  @Input() character: characterInterface = { id: 0, name: '', image: '', hovered: false };
  @Output() save = new EventEmitter<characterInterface>();
  @Output() close = new EventEmitter<void>();
  errorMessage: string = '';

  handleSubmit() {
    if (!this.character.name.trim() || !this.character.image) {
      this.errorMessage = 'Name and URL are required.';
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(this.character.name.trim())) {
      this.errorMessage = 'Name must be a valid string.';
      return;
    }

    try {
      new URL(this.character.image.trim());
    } catch (_) {
      this.errorMessage = 'URL must be a valid URL.';
      return;
    }

    if (this.character.image.trim() && !/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(this.character.image.trim())) {
      this.errorMessage = 'Image URL must be a valid image link.';
      return;
    }

    if (!this.isEditMode) {
      this.character.id = this.character.name.trim().toLowerCase().replace(/\s+/g, '-') + '-' + Date.now();
    }
    this.character.name = this.character.name.trim();
    this.character.image = this.character.image.trim();

    this.save.emit(this.character);
  }

  closeModal() {
    this.close.emit();
  }

}
