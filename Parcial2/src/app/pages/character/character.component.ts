import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { characterInterface } from '../../interfaces/character-interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  characters: characterInterface[] = [];
  startIndex: number = 0;
  displayCount: number = 5; 

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.rickAndMortyService.getCharacterList().subscribe(data => {
      this.characters = data.results;
    });
  }

  move(direction: number): void {
    this.startIndex = (this.startIndex + direction + this.characters.length) % this.characters.length;
  }

  get visibleCharacters(): characterInterface[] {
    return this.characters.slice(this.startIndex, this.startIndex + this.displayCount);
  }
}
