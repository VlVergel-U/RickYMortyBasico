import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { characterInterface } from '../interfaces/character-interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterCrudService {
  private characterListSubject = new BehaviorSubject<characterInterface[]>([]);
  public characterList = this.characterListSubject.asObservable();

  addCharacter(character: characterInterface): void {
    const currentList = this.characterListSubject.getValue();
    this.characterListSubject.next([...currentList, character]);
  }

  updateCharacter(index: number, updatedCharacter: characterInterface): void {
    const currentList = this.characterListSubject.getValue();
    const updatedList = [...currentList];
    updatedList[index] = updatedCharacter;
    this.characterListSubject.next(updatedList);
  }

  deleteCharacter(index: number): void {
    const currentList = this.characterListSubject.getValue();
    const updatedList = currentList.filter((_, i) => i !== index);
    this.characterListSubject.next(updatedList);
  }

  getCurrentCharacterList(): characterInterface[] {
    return this.characterListSubject.getValue();
  }
}
