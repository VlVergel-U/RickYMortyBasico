import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { characterInterface } from '../../interfaces/character-interface';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../../components/popup/popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, PopupComponent],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  characters: characterInterface[] = [];
  startIndex: number = 0;
  displayCount: number = 5; 
  showModal: boolean = false;
  isEditMode: boolean = false;
  selectedCharacter: characterInterface = { id: 0, name: '', image: '', hovered: false };

    constructor(private rickAndMortyService: RickAndMortyService, private router: Router) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacterList().subscribe(data => {
      this.characters = data.results.map(character => ({
        ...character,
        hovered: false 
      }));
    });
  }

  move(direction: number): void {
    this.startIndex = (this.startIndex + direction + this.characters.length) % this.characters.length;
  }

  get visibleCharacters(): characterInterface[] {
    return this.characters.slice(this.startIndex, this.startIndex + this.displayCount);
  }

  deleteCharacter(id: number): void {
    this.characters = this.characters.filter(character => character.id !== id);
    this.startIndex = 0; 
  }

  openModal(isEdit: boolean, character?: characterInterface): void {
    this.isEditMode = isEdit;
    this.showModal = true;
    this.selectedCharacter = character
      ? { ...character }
      : { id: Date.now(), name: '', image: '', hovered: false };
  }

  handleSave(character: characterInterface): void {
    if (this.isEditMode) {
      const index = this.characters.findIndex(c => c.id === character.id);
      if (index !== -1) this.characters[index] = character;
    } else {
      this.characters.unshift(character);
    }
    this.showModal = false;
  }

  closeModal(): void {
    this.showModal = false;
  }

  closeSesion(){
    this.router.navigate(['/login']);
  }
}